const bag = (expression, callback) => {
  console.log(expression);
  callback();
};

const bite = operand => {
  return new Expectation(operand);
};
