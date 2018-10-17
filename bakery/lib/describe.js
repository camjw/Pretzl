"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bite = exports.bag = exports.batch = void 0;

var _colour = require("./colour");

var _expectation = require("./expectation");

var _seasonAll = require("./seasonAll");

const batch = (title, cb) => {
  console.log(_colour.FgYellow, title, _colour.Reset);
  cb();
};

exports.batch = batch;

const bag = (title, cb) => {
  console.log(_colour.FgBlue, title, _colour.Reset);
  cb();
};

exports.bag = bag;

const bite = (operand, secondOperand = null) => {
  (0, _seasonAll.runEveryBeforeEach)();
  return new _expectation.Expectation(operand, secondOperand);
};

exports.bite = bite;