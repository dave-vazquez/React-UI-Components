import React from "react";

import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";

import "./NumberPad.css";

const buttonValues = [
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0"
];

const NumberPad = props => {
  const {clearDisplay, updateTotal, evaluateExpression} = props;
  const operatorRegex = /[//*+-]/;

  function assignAdditionalClassNames(value) {
      if (operatorRegex.test(value)) return "operator-button";
      else if (value === "0") return "zero-button";
      else return '';
  }

  return (
    <div className="number-pad">
      <ActionButton
        additionalClassNames="clear-button"
        clearDisplay={clearDisplay}
        value="clear"
      />

      {buttonValues.map(value => {
        return (
          <NumberButton
            updateTotal={updateTotal}
            additionalClassNames={assignAdditionalClassNames(value)}
            value={value}
          />
        );
      })}

      <ActionButton 
        additionalClassNames="equals-button" 
        evaluateExpression={evaluateExpression}
        value="=" />
    </div>
  );
};

export default NumberPad;
