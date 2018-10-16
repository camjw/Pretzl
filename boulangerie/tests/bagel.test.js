const { bite } = require('pretzl');
const { Bagel } = require('pretzl');
const { batch } = require('pretzl');
const { bag } = require('pretzl');
const { toHaveBeenEatenMatcher } = require('../../bakery/lib/matchers/toHaveBeenCalled')


let a = new Bagel('mock', ['method1', 'method2']);


console.log("test has been eaten")

batch("Bagel a", function() {
  bag("method 1 has been called", function() {
    a.method1();
    bite(a, "method1").toHaveBeenEaten()
  });
});
