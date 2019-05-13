import React from "react";
import "./Button.css";

const NumberButton = props => {
  const { additionalClassNames, value } = props;

  function handleClick() {
    props.updateTotal(value);
  }

  return (
    <button
      className={`button ${additionalClassNames}`}
      onClick={handleClick}
      style={value === "*" ? { paddingTop: "25px" } : null}
    >
      {value}
    </button>
  );
};

export default NumberButton;
