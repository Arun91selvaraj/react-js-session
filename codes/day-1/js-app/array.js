// var numbers = [10, 20, 30, 40]
var numbers = new Array(10, 20, 30, 40)

numbers.push(50, 60, 70)
numbers.unshift(1, 2, 3)

/**
 * 0:1,
 * 1:2,
 * 2:3,
 * 3:10,
 * 4:20,
 * 5:30,
 * 6:40,
 * 7:50,
 * 8:60,
 * 9:70
 */
console.log(numbers)
numbers.splice(2, 2, 200, 300)
/**
 * 0:1,
 * 1:2,
 * 2:200,
 * 3:300,
 * 4:20,
 * 5:30,
 * 6:40,
 * 7:50,
 * 8:60,
 * 9:70
 */
console.log(numbers)
var copied = numbers.slice(3, 7)
console.log(copied)

var isEven = function (num) {
    return num % 2 != 0
}
var evenNumbers = numbers.filter(isEven)
evenNumbers.forEach(
    function (num) {
        console.log(num)
    }
)
numbers
    .sort(
        function (a, b) {
            return b - a
        }
    )

console.log(numbers)
//numbers.findIndex()
//numbers.find()
numbers
    .map(
        function (num) {
            return num * 2
        }
    ).forEach(
        (num) => {
            console.log(num)
        }
    )
