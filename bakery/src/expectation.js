import { toEqual as toEqualMatcher } from './matchers/toEqual';

export class Expectation {
  constructor(operand) {
    this.operand = operand;
  }

  toEqual(outcome) {
    return toEqualMatcher(this.operand, outcome);
  }

  toHaveBeenEaten() {
    this.operand(false);
  }
}
