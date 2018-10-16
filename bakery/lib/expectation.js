"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expectation = void 0;

var _toEqual = require("./matchers/toEqual");

var _toHaveBeenCalled = require("./matchers/toHaveBeenCalled");

class Expectation {
  constructor(operand, operand2 = null) {
    this.operand = operand;
    this.operand2 = operand2;
  }

  toEqual(outcome) {
    return (0, _toEqual.toEqual)(this.operand, outcome);
  }

  toHaveBeenEaten() {
    return (0, _toHaveBeenCalled.toHaveBeenEatenMatcher)(this.operand, this.operand2);
  }

}

exports.Expectation = Expectation;