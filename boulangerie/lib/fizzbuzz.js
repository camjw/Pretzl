"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fizzBuzz = void 0;

const checkDivisibilty = function checkDivisibilty(num, mod) {
  return num % mod === 0;
};

const fizzBuzz = function fizzBuzz(num) {
  if (checkDivisibilty(num, 15)) {
    return 'FizzBuzz';
  }

  if (checkDivisibilty(num, 3)) {
    return 'Fizz';
  }

  if (checkDivisibilty(num, 5)) {
    return 'Buzz';
  }

  return num;
};

exports.fizzBuzz = fizzBuzz;