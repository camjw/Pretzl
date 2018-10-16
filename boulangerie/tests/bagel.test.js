const { bite } = require('pretzl');
const { Bagel } = require('pretzl');
const { batch } = require('pretzl');
const { bag } = require('pretzl');


let a = new Bagel('mock', ['method1', 'method2']);

batch("Bagel a", function() {
  bag("method 1 has been called", function() {
    a.method1();
    bite(a, "method1").toHaveBeenEaten()
  });// Yuck
});

batch("Bagel a", function() {
  bag("method 1 has not been called", function() {

    bite(a, "method1").toHaveBeenEaten()
  });// Yuck
});


//
// a.method1();
//
// bite(a.method1).toHaveBeenEaten() // Yum
