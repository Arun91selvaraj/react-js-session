var y = 300
function hoistingFn() {
    console.log(x) //? undefined
    var x
    x = 10
    console.log(x) //? 10
    var i
    for (i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x) //?20
    }
    console.log(x) //?20

    //dec()
    function dec() {
        var a = 200
        console.log('dec', (a + x + y))
    }
    dec()

    //exp()
    var exp
    exp = function () {
        console.log('exp')
    }
    exp()
}
hoistingFn()

function another() {
    console.log(x) //? undefined
    var x
    x = 10
    console.log(x) //? 10
    var i
    for (i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x) //?20
    }
    console.log(x) //?20

    dec()
    function dec() {
        console.log('dec')
    }
    dec()

    //exp()
    var exp
    exp = function () {
        console.log('exp')
    }
    exp()
}