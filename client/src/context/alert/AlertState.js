import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = {
    msg: "",
    cssClass: ""
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (msg, cssClass, timeout = 3000) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, cssClass }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        setAlert,
        msg: state.msg,
        cssClass: state.cssClass
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
