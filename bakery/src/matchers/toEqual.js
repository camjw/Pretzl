import { FgGreen, FgRed, Reset } from '../colour';

export const toEqual = (a, b) => {
  if (a === b) {
    console.log(FgGreen, '🥨 Yum!', Reset);
  } else {
    console.log(FgRed, `Yuck! Expected ${a} (${typeof a}) to taste like ${b} (${typeof b})`, Reset);
  }
};
