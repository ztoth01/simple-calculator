import React from "react";
import "./App.css";

// import context
import CalculatorState from "./context/calculator/CalculatorState";
import AlertState from "./context/alert/AlertState";

// import Components
import Alert from "./components/utils/Alert";
import Header from "./components/header/Header";
import Calculator from "./components/calculator/Calculator";

const App = () => {
  return (
    <CalculatorState>
      <AlertState>
        <Alert />
        <div className="App">
          <Header />
          <Calculator />
        </div>
      </AlertState>
    </CalculatorState>
  );
};

export default App;
