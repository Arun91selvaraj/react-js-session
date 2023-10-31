//rest operator (...)
//this operator can be used to declare an array which will accept unknown number of arguments
//this array declared with rest operator should be the last one the argument list in the function
//there can be only one array declared with rest operator in the function argument list
//local variable can't be declared with rest operator
function calculateAverage(name, ...marks) {
    let avg = 0
    let sum = 0
    for (const value of marks) {
        sum += value
    }
    avg = sum / marks.length
    return `${name} has average of ${avg} marks`
}
console.log(calculateAverage('anil', 10, 20))
console.log(calculateAverage('sunil', 30, 40, 50))