import { expectation as ex } from './expectation';

export const bite = operand => {
  return new ex.Expectation(operand);
};
