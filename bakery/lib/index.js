"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bite = void 0;

var _expectation = require("./expectation");

const bite = operand => {
  return new _expectation.Expectation(operand);
};

exports.bite = bite;
