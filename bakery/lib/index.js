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
Object.defineProperty(exports, "batch", {
  enumerable: true,
  get: function get() {
    return _describe.batch;
  }
});
Object.defineProperty(exports, "bag", {
  enumerable: true,
  get: function get() {
    return _describe.bag;
  }
});
exports.bite = void 0;

var _expectation = require("./expectation");

var _bagel = require("./bagel");

var _describe = require("./describe");

const bite = operand => {
  return new _expectation.Expectation(operand);
};

exports.bite = bite;