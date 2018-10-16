"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveBeenEatenMatcher = void 0;

var _colour = require("../colour");

const toHaveBeenEatenMatcher = (mock, method) => {
  if (mock._count[method] > 0) {
    console.log(_colour.FgGreen, 'Yum!', _colour.Reset);
  } else {
    console.log(_colour.FgRed, `Yuck!`, _colour.Reset);
  }

  mock._resetCount(method);
};

exports.toHaveBeenEatenMatcher = toHaveBeenEatenMatcher;