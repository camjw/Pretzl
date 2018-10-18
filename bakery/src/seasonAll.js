import { Expectation } from './expectation';
import { Bagel } from './bagel';
import { batch, bag, bite, nobag } from './describe';

export { Bagel,
         bite,
         batch,
         bag,
         nobag,
         preheatEach,
         runEveryPreheatEach,
         preheatAll,
         cooldownEach,
         runEveryCooldownEach,
         cooldownAll
       }

// preheat
const preheatAll = cb => cb();

const runEveryPreheatEach = () => {
  preheatEachStack.forEach((level) => level.forEach(cb => cb()));
};

const preheatEachStack = [ [] ];
let indentLevel = 0;

const preheatEach = (cb) => {
  preheatEachStack[preheatEachStack.length - 1].push(cb);
};

// cooldown
const cooldownAll = cb => cb();

const runEveryCooldownEach = () => {
  cooldownEachStack.forEach((level) => level.forEach(cb => cb()));
};

const cooldownEachStack = [ [] ];
let indentLevelCooldown = 0;

const cooldownEach = (cb) => {
  cooldownEachStack[cooldownEachStack.length - 1].push(cb);
};
