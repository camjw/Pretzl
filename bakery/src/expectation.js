import { toEqual as toEqualMatcher } from './matchers/toEqual';
import { toHaveBeenEatenMatcher } from './matchers/toHaveBeenCalled';

export class Expectation {
  constructor(operand, operand2 = null) {
    this.operand = operand;
    this.operand2 = operand2
  }

  toEqual(outcome) {
    return toEqualMatcher(this.operand, outcome);
  }



  toHaveBeenEaten() {
    return toHaveBeenEatenMatcher(this.operand, this.operand2)
  }
}
