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

//2. constuctor function
function person(name, id, salary) {
    var info = ''
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.show = function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

var anilObjRef = new person('anil', 1, 1000)
console.log(anilObjRef.name)
console.log(anilObjRef['salary'])
console.log(anilObjRef.show())

