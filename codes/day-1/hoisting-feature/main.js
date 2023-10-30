function outer() {
    var a
    a = 100
    function inner() {
        var b
        b = 200
        console.log(b)
    }
    //inner()
    return inner
}
var innerFnRef = outer()
innerFnRef()