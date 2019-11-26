import React, { useContext } from "react";
import CalculatorContext from "../../../context/calculator/calculatorContext";
import "./Display.css";

const Display = () => {
  // context
  const calculatorContext = useContext(CalculatorContext);

  // destructuring - pulling out methods/state
  const { prevValue, operation, currentValue } = calculatorContext;

  return (
    <div className="calculator__display btleft-radius btright-radius">
      {prevValue &&
        <span className="previous-value">
          {prevValue}
        </span>}
      {operation &&
        <span className="previous-value">
          {operation}
        </span>}
      {currentValue &&
        <span className="current-value">
          {currentValue}
        </span>}
    </div>
  );
};

export default Display;
