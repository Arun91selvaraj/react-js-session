//1. object-literal syntax
/*
const obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    show: function () {
        return `
            Name: ${this.name},
            Id: ${this.id},
            Salary: ${this.salary}
        `
        // return 'Name: ' + this.name
        //     + ', Id: ' + this.id
        //     + ', Salary: ' + this.salary
    }
}
*/
//2. conctructor function syntax
/*
function person(name, id, salary) {
    this.name = name
    this.id = id
    this.salary = salary
}
person.prototype.show = function () {
    return `
            Name: ${this.name},
            Id: ${this.id},
            Salary: ${this.salary}
        `
}
//console.log(person.prototype)
const anilObjectRef = new person('anil', 1, 1000)
console.log(anilObjectRef.show())
*/

// console.log(anilObjectRef.hasOwnProperty('show'))
// console.log(anilObjectRef.__proto__.hasOwnProperty('show'))
// console.log(Object.prototype.hasOwnProperty('show'))

// const sunilObjectRef = new person('sunil', 2, 2000)
// sunilObjectRef.show()


class Person {
    constructor(name, id, salary) {
        this.name = name
        this.id = id
        this.salary = salary
    }
    show() {
        return `
            Name: ${this.name}, 
            Id: ${this.id}, 
            Salary: ${this.salary}
        `
    }
}

const sunilObjectRef = new Person('sunil', 2, 2000)
console.log(sunilObjectRef.show())

console.log(Person.prototype)
console.log(sunilObjectRef)
