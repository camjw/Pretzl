"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Bagel", {
  enumerable: true,
  get: function get() {
    return _bagel.Bagel;
  }
});
exports.bite = void 0;

var _expectation = require("./expectation");

var _bagel = require("./bagel");

const bite = operand => {
  return new _expectation.Expectation(operand);
};

exports.bite = bite;