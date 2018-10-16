import { toEqual as toEqualMatcher } from './matchers/toEqual';
import { toHaveBeenEatenMatcher } from './matchers/toHaveBeenCalled';

export class Expectation {
  constructor(operand, secondOperand) {
    this.operand = operand;
    this.secondOperand = secondOperand;
  }

  toEqual(outcome) {
    return toEqualMatcher(this.operand, outcome);
  }

  toHaveBeenEaten() {
    return toHaveBeenEatenMatcher(this.operand, this.secondOperand)
  }
}
