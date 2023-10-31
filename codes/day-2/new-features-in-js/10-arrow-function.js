// function outer() {
//     this.x = 10
//     var inner = function () {
//         this.y = 20
//         console.log(this.x + this.y)
//     }
//     inner = inner.bind(this)
//     inner()
// }
function outer() {
    this.x = 10
    var inner = () => {
        this.y = 20
        console.log(this.x + this.y)

        var innerAnother = () => {
            this.z = 30
            console.log(this.x + this.y + this.z)

            console.log(this)
        }
        innerAnother()
    }
    inner()
}
new outer()

const add = (a, b) => {
    this.res = a + b
    console.log(this)
}
add(12, 3)
//console.log(global)