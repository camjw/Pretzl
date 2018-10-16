export const toEqual = (a, b) => {
  if (a === b) {
    console.log("Yum!");
  } else {
    console.log(`Yuck! Expected ${a} to equal ${b}`);
  }
};
