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