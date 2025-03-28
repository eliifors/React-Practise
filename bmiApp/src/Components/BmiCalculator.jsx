import React from "react";
import "./BmiCalculator.css";

function BmiCalculator() {
  return (
    <div className="bmi-calculator">
      <h1>BMI CALCULATOR</h1>
      <div className="form">
        <p>Weight(kg) : </p>
        <input type="text" placeholder="Örn : 165" />
        <p>Height(cm) : </p>
        <input type="text" placeholder="Örn : 52" />
      </div>
      <button className="btn-calculate">Calculate</button>
    </div>
  );
}

export default BmiCalculator;
