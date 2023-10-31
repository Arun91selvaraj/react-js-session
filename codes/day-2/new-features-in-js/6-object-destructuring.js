//object destructuring
const obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    friends: [{
        name: 'mahesh',
        location: 'chennai'
    }, {
        name: 'suresh',
        location: 'bangalore'
    }],
    show: function () {
        return `
            Name: ${this.name},
            Id: ${this.id},
            Salary: ${this.salary}
        `
    }
}
// const nameValue = obj.name
// const idValue = obj.id
//const { name: nameValue, id: idValue } = obj
//console.log(nameValue, idValue)

// const name = obj.name
// const id = obj.id
//const { name: name, id: id } = obj

const { name, id } = obj
console.log(name, id)

const { friends: [{ location: firstFriendLoc }, { location: secondFriendLoc }] } = obj
console.log(firstFriendLoc, secondFriendLoc)

const numbers = [10, 20, 30, 40, 50, 60]
// const x = numbers[0]
// const y = numbers[2]
// const z = numbers[5]
const [x, , y] = numbers
console.log(x, y)