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
Object.defineProperty(exports, "nobag", {
  enumerable: true,
  get: function get() {
    return _describe.nobag;
  }
});
exports.cooldownAll = exports.runEveryCooldownEach = exports.cooldownEach = exports.preheatAll = exports.runEveryPreheatEach = exports.preheatEach = void 0;

require("core-js/modules/web.dom.iterable");

var _expectation = require("./expectation");

var _bagel = require("./bagel");

var _describe = require("./describe");

// preheat
const preheatAll = cb => cb();

exports.preheatAll = preheatAll;

const runEveryPreheatEach = () => {
  preheatEachStack.forEach(level => level.forEach(cb => cb()));
};

exports.runEveryPreheatEach = runEveryPreheatEach;
const preheatEachStack = [[]];
let indentLevel = 0;

const preheatEach = cb => {
  preheatEachStack[preheatEachStack.length - 1].push(cb);
}; // cooldown


exports.preheatEach = preheatEach;

const cooldownAll = cb => cb();

exports.cooldownAll = cooldownAll;

const runEveryCooldownEach = () => {
  cooldownEachStack.forEach(level => level.forEach(cb => cb()));
};

exports.runEveryCooldownEach = runEveryCooldownEach;
const cooldownEachStack = [[]];
let indentLevelCooldown = 0;

const cooldownEach = cb => {
  cooldownEachStack[cooldownEachStack.length - 1].push(cb);
};

exports.cooldownEach = cooldownEach;