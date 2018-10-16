import { FgYellow, FgBlue, Reset } from './colour';

export const batch = (title, cb) => {
  console.log(FgYellow, title, Reset);
  cb();
};

export const bag = (title, cb) => {
  console.log(FgBlue,"\t", title, Reset);
  cb();
};
