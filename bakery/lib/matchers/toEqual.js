"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toEqual = void 0;

const toEqual = (a, b) => {
  if (a === b) {
    console.log("Yum!");
  } else {
    console.log(`Yuck! Expected ${a} to equal ${b}`);
  }
};

exports.toEqual = toEqual;