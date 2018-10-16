const { bite } = require('pretzl');
const { Bagel } = require('pretzl');

let a = new Bagel('mock', ['method1', 'method2']);


console.log(a.method1(true));

a.method1();

console.log(a.method1(true));
