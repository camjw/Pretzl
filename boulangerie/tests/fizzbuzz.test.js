const fb = require('../lib/fizzbuzz.js');
const { bite } = require('pretzl');

bite(fb.fizzBuzz(1)).toEqual(1);
bite(fb.fizzBuzz(2)).toEqual(2);
bite(fb.fizzBuzz(3)).toEqual('Fizz');
bite(fb.fizzBuzz(4)).toEqual(4);
bite(fb.fizzBuzz(5)).toEqual('Buzz');
bite(fb.fizzBuzz(6)).toEqual('Fizz');
bite(fb.fizzBuzz(7)).toEqual('error');
bite(fb.fizzBuzz(7)).toEqual(7);
bite(fb.fizzBuzz(8)).toEqual(8);
bite(fb.fizzBuzz(9)).toEqual('Fizz');
bite(fb.fizzBuzz(15)).toEqual('FizzBuzz');
bite(fb.fizzBuzz(29)).toEqual(29);
bite(fb.fizzBuzz(30)).toEqual('FizzBuzz');
