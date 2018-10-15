import { toEqual as toEqualMatcher } from './matchers/toEqual';

class Expectation {
  constructor(operand) {
    this.operand = operand;
  }

  toEqual(outcome) {
    return toEqualMatcher(this.operand, outcome);
  }
}
