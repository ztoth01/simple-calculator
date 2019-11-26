import React from "react";
import "./Calculator.css";

import Display from "./display/Display";
import Numerics from "./numerics/Numerics";

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <Numerics />
    </div>
  );
};

export default Calculator;
