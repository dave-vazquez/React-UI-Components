import React from "react";
import math from "mathjs";

import Display from "./components/DisplayComponents/CalculatorDisplay";
import NumberPad from "./components/ButtonContainerComponents/NumberPad";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    
    this.state = { total: "0" };

    this.lastInput = this.state.total;
    this.operatorRegex = /[//*+-]/;
  }

  render() {
    return (
      <div className="app-container">
        <Display value={this.state.total} />
        <NumberPad
          updateTotal={this.updateTotal.bind(this)}
          evaluateExpression={this.evaluateExpression.bind(this)}
          clearDisplay={this.clearDisplay.bind(this)}
        />
      </div>
    );
  }

  updateTotal(input) {
    if (this.inputIsValid(input)) {
      let total = this.firstInputNumerical(input) ? "" : this.state.total;

      total += input;

      this.lastInput = input;
      this.setState({ total });
    }
  }

  inputIsValid(input) {
    if (this.belowCharacterLimit()) {
      if (this.inputIsOperator(input)) {
        if (this.operatorInputIsValid(input)) {
          return true;
        } else {
          alert("Invalid Input");
          return false;
        }
      }
      return true;
    } else {
      alert("Character Limit Reached");
      return false;
    }
  }

  belowCharacterLimit() {
    return this.state.total.length < 25;
  }

  inputIsOperator(input) {
    return this.operatorRegex.test(input);
  }

  operatorInputIsValid(input) {
    return (
      !(
        this.operatorRegex.test(this.lastInput) ||
        this.state.total === "Infinity" ||
        this.state.total === "error"
      ) && this.operatorRegex.test(input)
    );
  }

  firstInputNumerical(input) {
    return (
      (this.state.total === "0" ||
        this.state.total === "error" ||
        this.state.total === "Infinity") &&
      input.match(/[0-9]/)
    );
  }

  evaluateExpression() {
    let total;

    try {
      total = String(math.eval(this.state.total));
    } catch (createSyntaxError) {
      this.setState({ total: "error" });
      return;
    }

    this.setState({ total });
  }

  clearDisplay() {
    this.setState({ total: "0" });
    this.lastInput = "0";
  }
}

export default App;

/*
  impose character limit
  display 
*/
