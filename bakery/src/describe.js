import { FgYellow, FgBlue, Reset } from './colour';
import { Expectation } from './expectation';

export const batch = (title, cb) => {
  console.log(FgYellow, title, Reset);
  cb();
};

export const bag = (title, cb) => {
  console.log(FgBlue, title, Reset);
  cb();
};

export const bite = (operand, secondOperand = null) => {
  return new Expectation(operand, secondOperand);
};
