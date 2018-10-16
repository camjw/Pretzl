import { Expectation } from './expectation';
import { Bagel } from './bagel';
import { batch } from './describe';
import { bag } from './describe';



const bite = (operand, secondOperand = null) => {
  return new Expectation(operand, secondOperand);
};

export { Bagel, bite, batch, bag }
