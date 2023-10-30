var add = function (a, b) {
    return a + b
}

function invoke(fnRef, x, y) {
    console.log(fnRef(x, y))
}

invoke(add, 10, 20)

function filterElements(arr, logicFnRef) {
    var result = []
    for (var element of arr) {
        var isTrue = logicFnRef(element)
        if (isTrue)
            result.push(element)
    }
    return result
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//finding even numbers
var isEven = function (num) {
    return num % 2 == 0 ? true : false
}
var evenNumbers = filterElements(numbers, isEven)
console.log('printing even numbers')
for (var i = 0; i < evenNumbers.length; i++) {
    console.log(evenNumbers[i])
}
//finding odd numbers
var isOdd = function (num) {
    return num % 2 != 0 ? true : false
}
var oddNumbers = filterElements(numbers, isOdd)
console.log('printing odd numbers')
for (var i = 0; i < oddNumbers.length; i++) {
    console.log(oddNumbers[i])
}

var names = ['Anil', 'sunil', 'anuj', 'karan']
var containsA = function (name) {
    //return name.toLocaleLowerCase().includes('a')
    return name[0].toLocaleLowerCase() == 'a'
}
var namesWithA = filterElements(names, containsA)
console.log('printing names with first letter a')
for (var value of namesWithA) {
    console.log(value)
}
