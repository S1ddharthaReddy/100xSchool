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

// class Manager implements People {

//     name: string;
//     age: number;
//     number: string;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this.number = "1243674545";
//     }

//     isLegal(): boolean {
//         return this.age > 18
//     }
// }

// short hand for above

class Manager implements People {

    constructor(
        public name: string,
        public age: number,
    ) {}

    isLegal(): boolean {
        return this.age > 18
    }
}


let employee = new Manager("john", 30);
// console.log(employee.isLegal());


// follow up question - what is the difference between interfaces & abstract classes
// abstract classes

// abstract - do the implementation later

abstract class Userr {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract greet(): string;

    hello() {
        console.log("hii there");
    }
}

class Employee extends Userr {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }

    greet() {
        return "hii" + this.name
    }
}

// TYPES

// Very similar to interfaces, types let you aggregate data together

// interface User3 {
//     name: string
//     age: number
// }

// type User4 = {
//     name: string,
//     age: number
// }

// you cannot implement type in classes

// with types you do unions & intersections

// UNIONS & INTERSECTIONS

// Intersection

type Employee1 = {
    name: string;
    startDate: string;
}

type Manager1 = {
    name: string;
    department: string;
}

type TeamLead = Employee1 & Manager1; // & -> intersection

let e: Employee1 = {
    name: "Gladiator",
    startDate: "01-02-26"
}

let m: Manager1 = {
    name: "Gladiator",
    department: "IT"
}

let t: TeamLead = {
    name: "Gladiator",
    startDate: "01-02-26",
    department: "IT"
}

// Union - |

type GoodUser = {
    name: string,
    gift: string
}

type BadUser = {
    name: string,
    ip: string
}

// you can have either GoodUser or BadUser (or) BOTH
// but in intersection - you need to have everything all

type User5 = GoodUser | BadUser;

let u: User5 = {
    name: "Atradis",
    gift: "Car",
    ip: "134252352"
}

// interface vs types
// create two types called User and Admin
// create a function that takes either a user or an admin as an input
// , and returns a string saying "Welcome, [name]"

interface Admin {
    name: string;
    permissions: string;
}

interface User6 {
    name: string;
    age: number;
}

type UserOrAdmin = User | Admin

function greetThem(user: UserOrAdmin) {
    console.log(user.name);
}

