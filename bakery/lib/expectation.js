"use strict";

var _toEqual = require("./matchers/toEqual");

class Expectation {
  constructor(operand) {
    this.operand = operand;
  }

  toEqual(outcome) {
    return (0, _toEqual.toEqual)(this.operand, outcome);
  }

}