import { Expectation } from './expectation';
import { Bagel } from './bagel';

const bite = operand => {
  return new Expectation(operand);
};

export { Bagel, bite }
