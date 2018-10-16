const { bite } = require('pretzl');
const { Bagel } = require('pretzl');
const { batch } = require('pretzl');
const { bag } = require('pretzl');
const { toHaveBeenEatenMatcher } = require('../../bakery/lib/matchers/toHaveBeenCalled')


let a = new Bagel('mock', [['method1', "hello"], ['method2']], [["variable1", "test"], ["variable2"]]);
let b = new Bagel('mock2', [["method1", "woo"]])
let c = new Bagel('mock3', [], [["variable"],["variable2"]])

batch("Bagel a", function() {
  bag("method 1 has been called", function() {
    a.method1();
    bite(a, "method1").toHaveBeenEaten()
  });
});
