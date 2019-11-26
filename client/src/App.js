import React from "react";
import "./App.css";

import CalculatorState from "./context/calculator/CalculatorState";
import AlertState from "./context/alert/AlertState";

import Alert from "./components/utils/Alert";
import Header from "./components/header/Header";

// import Components
import Calculator from "./components/calculator/Calculator";

const App = () => {
  return (
    <CalculatorState>
      <AlertState>
        <Alert msg="hello" />
        <div className="App">
          <Header />
          <Calculator />
        </div>
      </AlertState>
    </CalculatorState>
  );
};

export default App;
