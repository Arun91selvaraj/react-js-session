const divide = function (a, b) {

    const p = new Promise(
        //executor function
        function (resolveFnRef, rejectFnRef) {
            const res = a / b
            if (res == Infinity)
                rejectFnRef(new Error('divisor should not be zero'))
            // setTimeout(
            //     () => console.log(res),
            //     2000
            // )
            console.log(res)
            resolveFnRef()
        }
    )
    return p
}

const add = function (a, b) {
    return a + b
}
const promiseDivide = divide(12, 3)
// promiseDivide
//     .then(
//         function (data) {
//             console.log(data)
//         },
//         function (err) {
//             console.log(err)
//         }
//     )
promiseDivide
    .catch(
        function (err) {
            console.log(err)
        }
    )
console.log(add(12, 3))