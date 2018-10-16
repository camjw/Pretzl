import { Expectation } from './expectation';
import { Bagel } from './bagel';
import { batch } from './describe';
import { bag } from './describe';



const bite = operand => {
  return new Expectation(operand);
};

export { Bagel, bite, batch, bag }
