const { readFile } = require('fs')
readFile(
    './data.txt',
    { encoding: 'utf-8' },
    function (err, data) {
        if (err != undefined)
            console.log(err)

        if (data != undefined)
            console.log(data.toString())
    }
)
console.log('is it the end?')