var strValue = 'verizon'
console.log(typeof strValue)

var intValue = 12
console.log(typeof intValue)

var floatValue = 12.34
console.log(typeof floatValue)

var boolValue = true
console.log(typeof boolValue)

// strValue = 30
// console.log(typeof strValue)

var noValue
console.log(noValue, typeof noValue)

var result = noValue + intValue
console.log(result, typeof result)

var updatedStrValue = strValue + undefined
console.log(updatedStrValue, typeof updatedStrValue)

try {
    var divRes = 12 / 0

    if (divRes == Infinity)
        throw new Error('divisor can not be zero')

    console.log(divRes, typeof divRes)
} catch (error) {
    console.log(error)
}

//1. object-literal syntax
var obj = {
    //__proto__:reference
    name: 'anil',
    id: 1,
    salary: 1000,
    show: function () {
        //var name = ''
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
console.log(obj, typeof obj)

//dot operator (.)
console.log(obj.name)
//indexer
console.log(obj['salary'])

console.log(obj.show())
console.log(obj['show']())

obj.location = 'Chennai'
obj['sayHi'] = function () {
    console.log('Hi ' + this.name)
}

console.log(obj)

console.log(add(12, 13))
//function declaration
function add(a, b) {
    return a + b
}
console.log(add(12, 13))

//console.log(subtract(12, 3))
//function expression
var subtract = function (a, b) {
    return a - b
}
console.log(subtract(12, 3))
