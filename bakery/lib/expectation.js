"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expectation = void 0;

var _toEqual = require("./matchers/toEqual");

var _toHaveBeenCalled = require("./matchers/toHaveBeenCalled");

class Expectation {
  constructor(operand, secondOperand) {
    this.operand = operand;
    this.secondOperand = secondOperand;
  }

  toTasteLike(outcome) {
    return (0, _toEqual.toEqual)(this.operand, outcome);
  }

  toHaveBeenEaten() {
    return (0, _toHaveBeenCalled.toHaveBeenEatenMatcher)(this.operand, this.secondOperand);
  }

}

exports.Expectation = Expectation;