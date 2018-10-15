import { fizzBuzz } from '../src/fizzbuzz';
import { bite } from 'pretzl';

bite(fizzBuzz(1)).toEqual(1);
bite(fizzBuzz(2)).toEqual(2);
bite(fizzBuzz(3)).toEqual('Fizz');
bite(fizzBuzz(4)).toEqual(4);
bite(fizzBuzz(5)).toEqual('Buzz');
bite(fizzBuzz(6)).toEqual('Fizz');
bite(fizzBuzz(7)).toEqual(7);
bite(fizzBuzz(8)).toEqual(8);
bite(fizzBuzz(9)).toEqual('Fizz');
bite(fizzBuzz(15)).toEqual('FizzBuzz');
bite(fizzBuzz(29)).toEqual(29);
bite(fizzBuzz(30)).toEqual('FizzBuzz');
