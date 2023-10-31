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
    }
}
/*
const copy = {}

for (const propName in obj) {
    const propValue = obj[propName]
    copy[propName] = propValue
}
*/
//spread operator (...)
const copy = { ...obj }

console.log(copy)

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers, 100, 200]
console.log(copyNumbers)