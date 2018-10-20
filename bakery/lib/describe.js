"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bite = exports.nobag = exports.bag = exports.batch = void 0;

var _colour = require("./colour");

var _expectation = require("./expectation");

var _seasonAll = require("./seasonAll");

const batch = (title, cb) => {
  console.log(_colour.FgMagenta, title, _colour.Reset);
  (0, _seasonAll.preheatAll)(() => {});
  cb();
  (0, _seasonAll.cooldownAll)(() => {});
};

exports.batch = batch;

const bag = (title, cb) => {
  console.log(_colour.FgCyan, title, _colour.Reset);
  (0, _seasonAll.runEveryPreheatEach)();
  cb();
};

exports.bag = bag;

const nobag = (title, cb) => {
  console.log(_colour.FgYellow, 'Dropped your bagel!', _colour.Reset);
};

exports.nobag = nobag;

const bite = (operand, secondOperand = null) => {
  (0, _seasonAll.runEveryCooldownEach)();
  (0, _seasonAll.runEveryPreheatEach)();
  return new _expectation.Expectation(operand, secondOperand);
};

exports.bite = bite;