class Sample {
    static data = 100
    #name
    #id
    constructor(name, id) {
        this.#name = name
        this.#id = id
    }
    static show() {
        console.log('static show: ' + this.data)
    }
    get name() {
        return this.#name
    }
    set name(value) {
        this.#name = value
    }
    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }
}
Sample.show()
const s = new Sample()
s.name = 'anil'
s.id = 1
console.log(s.name)
console.log(s.id)