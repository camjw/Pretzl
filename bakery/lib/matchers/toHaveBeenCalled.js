"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveBeenEaten = void 0;

var _colour = require("../colour");

const toHaveBeenEaten = (obj, method) => {
  if (obj._count[method] > 0) {
    console.log(_colour.FgGreen, 'Yum!', _colour.Reset);
  } else {
    console.log(_colour.FgRed, `Yuck!`, _colour.Reset);
  }

  obj._resetCount(method);
};

exports.toHaveBeenEaten = toHaveBeenEaten;
toHaveBeenEaten(a, method1);