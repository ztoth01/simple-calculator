import React, { useContext, Fragment } from "react";
import AlertContext from "../../context/alert/alertContext";

import "./Alert.css";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { msg, cssClass } = alertContext;
  return (
    <Fragment>
      {msg &&
        <div className={`alert ${cssClass}`}>
          <span>
            {msg}
          </span>
        </div>}
    </Fragment>
  );
};

export default Alert;
