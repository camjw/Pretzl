import { FgYellow, FgBlue, Reset } from './colour';
import { Expectation } from './expectation';
import { runEveryBeforeEach} from './seasonAll';

export const batch = (title, cb) => {
  console.log(FgYellow, title, Reset);
  cb();
};

export const bag = (title, cb) => {
  console.log(FgBlue, title, Reset);
  cb();
};

export const bite = (operand, secondOperand = null) => {
  runEveryBeforeEach();
  return new Expectation(operand, secondOperand);
};
