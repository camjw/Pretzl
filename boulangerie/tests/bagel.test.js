const { Bagel } = require('pretzl')

let a = new Bagel("mock", ["method1", "method2"])

a.method1()
a.method2()
a.method2()
a._resetCount("method2")

console.log(a._count)
