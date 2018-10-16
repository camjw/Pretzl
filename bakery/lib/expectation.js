"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expectation = void 0;

var _toEqual = require("./matchers/toEqual");

class Expectation {
  constructor(operand) {
    this.operand = operand;
  }

  toEqual(outcome) {
    return (0, _toEqual.toEqual)(this.operand, outcome);
  }

  toHaveBeenEaten() {
    this.operand(true);
  }

}

exports.Expectation = Expectation;