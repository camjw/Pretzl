"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toEqual = void 0;

var _colour = require("../colour");

const toEqual = (a, b) => {
  if (a === b) {
    console.log(_colour.FgGreen, 'Yum!', _colour.Reset);
  } else {
    console.log(_colour.FgRed, `Yuck! Expected ${a} to taste like ${b}`, _colour.Reset);
  }
};

exports.toEqual = toEqual;