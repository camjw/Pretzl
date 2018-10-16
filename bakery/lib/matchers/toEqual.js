"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toEqual = void 0;

const toEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  throw new Error(`Not equal. Expected ${a} to equal ${b}`);
};

exports.toEqual = toEqual;