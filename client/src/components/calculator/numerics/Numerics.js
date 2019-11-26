import React, { useContext, Fragment } from "react";
import CalculatorContext from "../../../context/calculator/calculatorContext";
import "./Numerics.css";

import Button from "../../utils/Button";

const Numerics = () => {
  // context
  const calculatorContext = useContext(CalculatorContext);

  // destructuring - pulling out methods/state
  const {
    numericHandler,
    equalHandler,
    clearHandler,
    operationHandler,
    deleteHandler
  } = calculatorContext;

  return (
    <Fragment>
      <Button
        value="AC"
        clickEvent={clearHandler}
        className="two-span-column"
      />
      <Button value="Del" clickEvent={deleteHandler} />
      <Button className="operation" value="÷" clickEvent={operationHandler} />
      <Button value="7" clickEvent={numericHandler} />
      <Button value="8" clickEvent={numericHandler} />
      <Button value="9" clickEvent={numericHandler} />
      <Button className="operation" value="x" clickEvent={operationHandler} />
      <Button value="4" clickEvent={numericHandler} />
      <Button value="5" clickEvent={numericHandler} />
      <Button value="6" clickEvent={numericHandler} />
      <Button className="operation" value="-" clickEvent={operationHandler} />
      <Button value="1" clickEvent={numericHandler} />
      <Button value="2" clickEvent={numericHandler} />
      <Button value="3" clickEvent={numericHandler} />
      <Button className="operation" value="+" clickEvent={operationHandler} />
      <Button
        className="bbleft-radius two-span-column"
        value="0"
        clickEvent={numericHandler}
      />
      <Button value="." clickEvent={numericHandler} />
      <Button
        className="bbright-radius operation"
        value="="
        clickEvent={equalHandler}
      />
    </Fragment>
  );
};

export default Numerics;
