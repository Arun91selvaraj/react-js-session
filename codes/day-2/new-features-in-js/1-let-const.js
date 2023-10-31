'use strict'
let x = 100
console.log(x)
for (let index = 0; index < 1; index++) {
    let x = 200
    console.log(x)
}
console.log(x)

const y = 2000
//y = 3000
console.log(y)

const numbers = [1, 2, 3, 4]
//numbers = []
numbers.push(10)

console.log(a)
var a
a = 100

//this "y" is not hoisted as it is not declared with "var", "let" or "const"
//console.log(y) <-- this will throw error (ReferenceError: y is not defined)
y = 200
console.log(y)