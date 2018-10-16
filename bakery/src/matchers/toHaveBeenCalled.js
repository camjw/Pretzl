import { FgGreen, FgRed, Reset } from '../colour';

export const toHaveBeenEatenMatcher = (mock, method) => {
  if (mock._count[method] > 0) {
    console.log(FgGreen, 'Yum!', Reset);
  } else{
    console.log(FgRed, `Yuck!`, Reset);
  }
  mock._resetCount(method)
};
