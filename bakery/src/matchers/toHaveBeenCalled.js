import { FgGreen, FgRed, Reset } from '../colour';

export const toHaveBeenEatenMatcher = (obj, method) => {
  if (obj._count[method] > 0) {
    console.log(FgGreen, 'Yum!', Reset);
  } else{
    console.log(FgRed, `Yuck!`, Reset);
  }
  obj._resetCount(method)
};
