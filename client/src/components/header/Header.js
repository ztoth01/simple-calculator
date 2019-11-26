import React, { useContext } from "react";
import CalculatorContext from "../../context/calculator/calculatorContext";
import AlertContext from "../../context/alert/alertContext";
import "./Header.css";

import Button from "../utils/Button";

const Connect = () => {
  // context
  const calculatorContext = useContext(CalculatorContext);
  const alertContext = useContext(AlertContext);

  // destructuring - pulling out methods/state
  const { saveResult, getPrevResult, currentValue } = calculatorContext;
  const { setAlert } = alertContext;

  const save = () => {
    if (currentValue === "") {
      setAlert("Please make sure you have a result to save", "danger", 2500);
    } else {
      setAlert("Your result has been saved!", "success", 1500);
      saveResult();
    }
  };

  return (
    <div className="header">
      <h2>Online Calculator</h2>
      <div>
        <Button value="Save Result" clickEvent={save} />
        <Button value="Previous Result" clickEvent={getPrevResult} />
      </div>
    </div>
  );
};

export default Connect;
