import { FgYellow, FgBlue, FgMagenta, FgCyan, Reset } from './colour';
import { Expectation } from './expectation';
import { runEveryPreheatEach,
         preheatAll,
         cooldownEach,
         runEveryCooldownEach,
         cooldownAll } from './seasonAll';

export const batch = (title, cb) => {
  console.log(FgMagenta, title, Reset);
  preheatAll(() => {
  });
  cb();
  cooldownAll(() => {
  });
};

export const bag = (title, cb) => {
  console.log(FgCyan, title, Reset);
  cb();
};

export const nobag = (title, cb) => {
  console.log(FgYellow, `${ ' Dropped your bagel! '}`, Reset)
}

export const bite = (operand, secondOperand = null) => {
  runEveryPreheatEach();
  return new Expectation(operand, secondOperand);
  runEveryCooldownEach();
};
