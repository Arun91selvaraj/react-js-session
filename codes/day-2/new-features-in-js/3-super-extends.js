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
function trainer(name, id, salary, subject) {
    person.call(this, name, id, salary)
    this.subject = subject
    this.show = function () {
        return `${this.__proto__.show.call(this)},
        Subject:${this.subject}`
    }
}
Object.setPrototypeOf(Trainer.prototype, Person.prototype)
const joydipObject = new trainer('joydip', 1, 1000, 'React JS')
console.log(joydipObject.show())
*/
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
class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subject = subject
    }
    show() {
        return `${super.show()},
        Subject:${this.subject}`
    }
}
const joydipObject = new Trainer('joydip', 1, 1000, 'React JS')
console.log(joydipObject.show())

console.log(Person.prototype)
console.log(Trainer.prototype)
console.log(joydipObject)