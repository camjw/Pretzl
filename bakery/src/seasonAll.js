import { Expectation } from './expectation';
import { Bagel } from './bagel';
import { batch } from './describe';
import { bag } from './describe';
import { bite } from './describe';

export { Bagel, bite, batch, bag, beforeEach, runEveryBeforeEach, beforeEachStack }

// Runs every beforeEach callback in the stack
const runEveryBeforeEach = () => {
  beforeEachStack.forEach((level) => level.forEach(cb => cb()));
};

// The stack of beforeEach callbacks
const beforeEachStack = [ [] ];
let indentLevel = 0;

// A simple and functional beforeEach implementation
const beforeEach = (cb) => {
  beforeEachStack[beforeEachStack.length - 1].push(cb);
};
