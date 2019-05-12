import React from "react";
import "./Button.css";

const ActionButton = props => {
  const { additionalClassNames, value } = props;

  function handleClick() {
    props.value === "clear" ? props.clearDisplay() : props.evaluateExpression();
  }

  return (
    <div
      className={`button action-button ${additionalClassNames}`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default ActionButton;
