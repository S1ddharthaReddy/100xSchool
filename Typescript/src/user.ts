// Basic Types in TypeScript - primitive

// Typescript provides you some basic types
// number, string, boolean, null, undefined

function sum(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return "Hello" + name;
}

function isEven(num: number): boolean {
    return num % 2 == 0;
}

// Interfaces & Types

// the problem with the primitives types is you can't create complex types with it (e.g objects)

interface Address {
    city: string,
    country: string,
    pincode: number
}

interface User {
    name: string,
    age: number,
    address?: Address
}
// to make a specific key optional - ?

interface Office {
    address: Address
}


let user: User = {
    name: "aegon",
    age: 21,
    address: {
        city: 'Delhi',
        country: 'India',
        pincode: 324990,
    }
}

// question - what will be the type of user, here comes interfaces
// to define its type, we create interfaces

function isLegal(user: User): boolean {
    return user.age >= 18;
}

// const ans = isLegal(user);
// if(ans) {
//     console.log("You are of legal age");
// }
// else {
//     console.log("You are illegal")
// }

// Implementing interfaces

// Interfaces have another special property. You can implement interfaces as a class

interface People {
    name: string,
    age: number,
    isLegal(): boolean
}

// let person: People = {
//     name: "harkirat",
//     age: 21,
//     // greet: ()=> {
//     //     return "hi"
//     // }
// }

class Manager implements People {

    name: string;
    age: number;
    number: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.number = "1243674545";
    }

    isLegal(): boolean {
        return this.age > 18
    }
}


let employee = new Manager("john", 30);
console.log(employee.isLegal());