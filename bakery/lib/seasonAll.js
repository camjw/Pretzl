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
Object.defineProperty(exports, "bite", {
  enumerable: true,
  get: function get() {
    return _describe.bite;
  }
});
exports.beforeEachStack = exports.runEveryBeforeEach = exports.beforeEach = void 0;

require("core-js/modules/web.dom.iterable");

var _expectation = require("./expectation");

var _bagel = require("./bagel");

var _describe = require("./describe");

// Runs every beforeEach callback in the stack
const runEveryBeforeEach = () => {
  beforeEachStack.forEach(level => level.forEach(cb => cb()));
}; // The stack of beforeEach callbacks


exports.runEveryBeforeEach = runEveryBeforeEach;
const beforeEachStack = [[]];
exports.beforeEachStack = beforeEachStack;
let indentLevel = 0; // A simple and functional beforeEach implementation

const beforeEach = cb => {
  beforeEachStack[beforeEachStack.length - 1].push(cb);
};

exports.beforeEach = beforeEach;