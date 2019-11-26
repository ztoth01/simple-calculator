import React, { useReducer } from "react";
import CalculatorContext from "./calculatorContext";
import calculatorReducer from "./calculatorReducer";
import axios from "axios";

import {
  SET_CURRENT_VALUE,
  SET_PREVIOUS_VALUE,
  SET_IS_PREVIOUS_RESULT,
  SET_OPERATION
} from "../types";

const CalculatorState = props => {
  const initialState = {
    currentValue: "",
    prevValue: "",
    operation: "",
    isPrevResult: false
  };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  // Save current result to the result.txt
  const saveResult = async () => {
    const config = {
      headers: {
        "Content-Type": "text/plain"
      }
    };
    try {
      axios.post("/api/v1/result", state.currentValue, config);
    } catch (error) {
      console.error(error);
    }
  };

  // Get previous result from Text file
  const getPrevResult = async () => {
    try {
      const res = await axios.get("/api/v1/result");
      dispatch({ type: SET_CURRENT_VALUE, payload: res.data.data });
    } catch (error) {
      console.error(error);
    }
  };

  // Clear all click handler
  const clearHandler = () => {
    dispatch({ type: SET_CURRENT_VALUE, payload: "" });
    dispatch({ type: SET_PREVIOUS_VALUE, payload: "" });
    dispatch({ type: SET_OPERATION, payload: "" });
  };

  // Equal click handler
  const equalHandler = () => {
    // Check there are two numbers so calculate is possible
    if (state.prevValue === "") return;
    //setCurrentValue(calculate(prevValue, currentValue));
    dispatch({
      type: SET_CURRENT_VALUE,
      payload: calculate(state.prevValue, state.currentValue)
    });
    dispatch({ type: SET_OPERATION, payload: "" });
    dispatch({ type: SET_PREVIOUS_VALUE, payload: "" });
    dispatch({ type: SET_IS_PREVIOUS_RESULT, payload: true });
  };

  // Operations click handler
  const operationHandler = e => {
    // Is currentValue not empty
    if (state.currentValue === "") return;
    //if Chain operation
    state.operation !== ""
      ? dispatch({
          type: SET_PREVIOUS_VALUE,
          payload: calculate(state.prevValue, state.currentValue)
        })
      : dispatch({ type: SET_PREVIOUS_VALUE, payload: state.currentValue });
    dispatch({ type: SET_OPERATION, payload: e.target.value });
    dispatch({ type: SET_CURRENT_VALUE, payload: "" });
  };

  // Numeric values and dot click handler
  const numericHandler = e => {
    // Prevent the second dot to be entered
    if (state.currentValue.split(".").length >= 2 && e.target.value === ".")
      return;
    // Prevent appending to previous result
    if (state.isPrevResult) {
      dispatch({ type: SET_CURRENT_VALUE, payload: e.target.value });
      dispatch({ type: SET_IS_PREVIOUS_RESULT, payload: false });
    } else {
      dispatch({
        type: SET_CURRENT_VALUE,
        payload: state.currentValue + e.target.value
      });
    }
  };

  // Delete previous number
  const deleteHandler = () => {
    if (state.currentValue.length > 0) {
      dispatch({
        type: SET_CURRENT_VALUE,
        payload: state.currentValue.slice(0, -1)
      });
    }
  };

  // Calculate
  const calculate = (a, b) => {
    let result;
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return;
    switch (state.operation) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "x":
        result = a * b;
        break;
      case "÷":
        result = a / b;
        break;
      default:
        return;
    }
    return String(result);
  };

  return (
    <CalculatorContext.Provider
      value={{
        currentValue: state.currentValue,
        prevValue: state.prevValue,
        operation: state.operation,
        isPrevResult: state.isPrevResult,
        serverError: state.serverError,
        clearHandler,
        equalHandler,
        operationHandler,
        numericHandler,
        deleteHandler,
        saveResult,
        getPrevResult
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};
export default CalculatorState;
