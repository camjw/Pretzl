const fb = require('../lib/fizzbuzz.js');

const { Bagel,
        bite,
        batch,
        bag,
        beforeEach,
        runEveryBeforeEach,
        beforeAll,
        afterAll
      } = require('pretzl');

batch("tests for fizzbuzz", () => {

  beforeAll(() => {
    console.log('hey')
  });

  beforeEach(() => {
    console.log('Fuck JavaScript')
  });

  bag('FizzBuzz tests', () => {
    bite(fb.fizzBuzz(1)).toTasteLike(1);
    bite(fb.fizzBuzz(2)).toTasteLike(2);
    bite(fb.fizzBuzz(3)).toTasteLike('Fizz');
    bite(fb.fizzBuzz(4)).toTasteLike(4);
    bite(fb.fizzBuzz(5)).toTasteLike('Buzz');
    bite(fb.fizzBuzz(6)).toTasteLike('Fizz');
    bite(fb.fizzBuzz(7)).toTasteLike('Buzz');
    bite(fb.fizzBuzz(7)).toTasteLike(7);
    bite(fb.fizzBuzz(8)).toTasteLike(8);
    bite(fb.fizzBuzz(9)).toTasteLike('Fizz');
    bite(fb.fizzBuzz(15)).toTasteLike('FizzBuzz');
    bite(fb.fizzBuzz(29)).toTasteLike(29);
    bite(fb.fizzBuzz(30)).toTasteLike('FizzBuzz');
  });

  afterAll(() => {
    console.log("You're my Wonderwall")
  })
});
