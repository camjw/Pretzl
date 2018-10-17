const { bite } = require('pretzl');
const { Bagel } = require('pretzl');
const { batch } = require('pretzl');
const { bag } = require('pretzl');
const { preheatEach } = require('pretzl')

const { toHaveBeenEatenMatcher } = require('../../bakery/lib/matchers/toHaveBeenCalled')

preheatEach(function() {
  console.log('Hi')
  let a = new Bagel('mock', [['method1', "hello"], ['method2']], [["variable1", "test"], ["variable2"]]);

})


// let a = new Bagel('mock', [['method1', "hello"], ['method2']], [["variable1", "test"], ["variable2"]]);
let b = new Bagel('mock2', [["method1", "woo"]])
let c = new Bagel('mock3', [], [["variable"],["variable2"]])


batch("Bagel a", () => {
  bag("method 1 has been called", () => {
  });
  bag("another test", () => {
  })
});
