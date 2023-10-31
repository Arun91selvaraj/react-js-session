const a: number = 100

const add = (a: number, b: number): number => a + b
const subtract = function (a: number, b: number): number {
    return a - b
}
function multiply(a: number, b: number): number {
    return a * b
}

class Person {
    /*
    private _name: string
    private _id: number
    private _salary: number

    constructor(_name: string, _id: number, _salary: number) {
        this._name = _name
        this._id = _id
        this._salary = _salary
    }
    */
    constructor(private _name: string, private _id: number, private _salary: number) {

    }

    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
    public get salary(): number {
        return this._salary
    }
    public set salary(value: number) {
        this._salary = value
    }
    show(): string {
        return `${this._name}, ${this._id}, ${this._salary}`
    }
}
class Trainer extends Person {
    //private _subject: string

    constructor(name: string, id: number, salary: number, private _subject: string) {
        super(name, id, salary)
        //this._subject = _subject
    }
    public get subject(): string {
        return this._subject
    }
    public set subject(value: string) {
        this._subject = value
    }
    show(): string {
        return `${super.show()}, ${this._subject}`
    }
}

const joydipTrainer: Trainer = new Trainer('joydip', 1, 1000, 'React JS')
console.log(joydipTrainer.show())

interface IOperations {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}
abstract class PartialOperations implements IOperations {
    add(a: number, b: number): number {
        return a + b
    }
    abstract subtract(a: number, b: number): number;
}
class Implementation extends PartialOperations {
    subtract(a: number, b: number): number {
        return a - b
    }
    print(): void {
        console.log('print')
    }
}
const opImplicit: Implementation = new Implementation()
const res = opImplicit.add(12, 13)
console.log(res)

const opExplicit: IOperations = new Implementation()
const resSub = opExplicit.subtract(12, 3)
console.log(resSub)

interface Product {
    name: string;
    id: number;
    price?: number;
}

const p: Product = {
    id: 1,
    name: 'dell xps',
    //price: 1000
}
const products: Product[] = [{
    id: 1,
    name: 'dell xps',
    price: 1000
}]

type myType = number | undefined | null
function test(): myType {
    return 0
}

type productType = {
    name: string,
    id: number,
    price?: number
}

function getProducts(pro: productType): productType[] {
    return []
}

type fnType = (value: string) => string

const convertToUpper: fnType = function (arg: string): string {
    return arg.toLocaleUpperCase()
}

function changeString(fnRef: fnType) {

}
function addValues(a: number): number {
    return a + 50
}
changeString(convertToUpper)

//new Promise().then()

//type logicFnType = (a: number) => boolean
interface FilterLogic<E> {
    filterElements(arr: E[], fnRef: (a: E) => boolean): E[]
}

class FilterImplementation<E> implements FilterLogic<E>{
    filterElements<E>(arr: E[], fnRef: (a: E) => boolean): E[] {
        const result: E[] = []
        for (const value of arr) {
            if (fnRef(value))
                result.push(value)
        }
        return result
    }
}

const numbers = [1, 2, 3, 4, 5]
const isEven = (num: number) => num % 2 == 0
const filterImpl = new FilterImplementation<number>()
const evenNumbers = filterImpl.filterElements(numbers, isEven)
//const evenNumbers = filterElements<number>(numbers, isEven)
//const evenNumbers = numbers.filter((a) => a % 2 == 0)
evenNumbers
    .forEach(
        (num: number) => console.log(num)
    )

numbers
    .sort(
        (x, y) => x - y
    )
    .filter(
        (x) => x % 2 != 0
    )
    .forEach(
        (a) => console.log(a)
    )