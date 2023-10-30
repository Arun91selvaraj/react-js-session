//1. object-literal syntax
var obj = {
    //__proto__:reference
    name: 'anil',
    id: 1,
    salary: 1000,
    show: function () {
        //var name = ''
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
console.log(obj, typeof obj)

//dot operator (.)
console.log(obj.name)
//indexer
console.log(obj['salary'])

console.log(obj.show())
console.log(obj['show']())

obj.location = 'Chennai'
obj['sayHi'] = function () {
    console.log('Hi ' + this.name)
}

console.log(obj)
