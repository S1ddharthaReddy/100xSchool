
// let x: number | string = 1; // type inferencing

// x = "Winter is Coming"

// console.log(x);

function greet(name: string){
    return `Hello ${name}`;
}

// console.log(greet("Robb Stark"));


// types in typescript
// number, string, any
// let x: any = 1
// x = true
// x = "hello"
// x = 1

function sum(a: number, b: number): number {
    return a + b;
}

// console.log(sum(4, 5));

function isLegal(age: number) {
    if(age > 18) return true;
    else return false;
}

// console.log(isLegal(23));

// write a function that takes another function as input, and runs it after 1 second

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

// delayedCall(function() {
//     console.log("hello");
// })

// INTERFACES

// function greeet(user: {
//     name: string,
//     age: number
// }) {
//     console.log("hello" + user.name);
// }

// let user = {
//     name: "Atradis",
//     age: 22
// }

// greeet(user);

interface UserType {
    firstname: string,
    lastname: string,
    age: number
}

function greeet(user: UserType){

}

let user: UserType = {
    firstname: "atradis",
    age: 23,
    lastname: "daene"
}

// TYPES
// very similar to interfaces, types let you aggregate data together
// but they let you do other things
// union, intersection

interface User {
    name: string,
    age: number
}

type UserTypee = {
    name: string,
     age: number
}

let userr: UserTypee = {
    name: "Harkirat",
    age: 21
}


// type AddInput = string | number

// function add(a: AddInput, b: AddInput) {
//     return a + b;
// }

// INTERSECTION

interface Manager {
    name: string,
    age: number
}

interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee

let t: TeamLead = {
    name: "daemon",
    age: 21,
    department: "IT"
}



