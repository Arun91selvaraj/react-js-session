const divide = async function (a, b) {
    const res = a / b
    if (res == Infinity)
        throw new Error('divisor should not be zero')
    //return Promise.reject(new Error('divisor should not be zero'))

    return res
    //return Promise.resolve(res)
}

async function invoke() {
    try {
        const result = await divide(12, 3)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

invoke()

