

// creating objects
// const user = {
//     name: "Daemon",
//     age: 20,
//     emailId: "daemontargaryen@gmail.com",
//     amount: 3400,
//     "home address": "united states",
// }

// console.log(typeof user);
// console.log(user);

// // accesing elements
// console.log(user.age); // 20

// CRUD: Create Read Update Delete

// insert
// user.aadhar = 1243;
// console.log(user);

// update
// user.amount = 56788;
// console.log(user);

// delete
// delete user.aadhar;
// console.log(user);

// console.log(user[name]); // invalid
// console.log(user["name"]); // valid


// const user = {
//     name: "Daemon",
//     age: 20,
//     emailId: "daemontargaryen@gmail.com",
//     amount: 3400,
//     "home address": "united states",
// }

// const user2 = user; // points to same reference
// user2.age = 90;
// console.log(user);

// console.log(Object.keys(user)); // returns all keys [ 'name', 'age', 'emailId', 'amount', 'home address' ]
// console.log(Object.values(user)); // returns all values
// console.log(Object.entries(user)); // returns both keys & values

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

/* output
name Daemon
age 20
emailId daemontargaryen@gmail.com
amount 3400
home address united states
*/

// const user = {
//     name: "Daemon",
//     age: 20,
//     emailId: "daemontargaryen@gmail.com",
//     amount: 3400,
//     "home address": "united states",
// }

// old way
// const name = user.name;
// const age = user.age;
// console.log(name, age);

// destructuring

// const {name, age, amount} = user;

// console.log(name, age, amount); // Daemon 20 3400

// array destructuring

// const arr = [20, 30, 40, 50];

// const [first, second] = arr;
// console.log(first, second);

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// similarly you can do for values

// for both keys & values

// for(let [keys, values] of Object.entries(user)){
//     console.log(keys, values);
// }


// const user = {
//     name: "Daemon",
//     age: 20,
//     emailId: "daemontargaryen@gmail.com",
//     amount: 3400,
//     greeting: function(){
//         console.log(`Hello world ${this.name}`);
//         return 20;
//     }
// }

// const va = user.greeting();
// console.log(va);

// nested object

const user = {
    name: "Daemon",
    age: 20,
    emailId: "daemontargaryen@gmail.com",
    amount: 3400,
    greeting: function(){
        console.log(`Hello world ${this.name}`);
        return 20;
    },
    address: {
        city: "New York",
        state: "New jersey"
    }
}

// console.log(user.address.city);

// shallow copy

// const user2 = {...user};
// user2.name = "Aemon";
// user2.address.city = "Atlantis"; // it will change coz, it will handle till level one, nested it will not work

// console.log(user);

// deep copy

// const user2 = structuredClone(user);

// console.log(user2);

// const user3 = {
//     name: "rane",
//     age:23,
//     0: 100,
//     2:"Mohan"
// }

// console.log(user3['0']);

// const arr = [10, 20, 30, 40];

// behind the scene of array
// array is an object

// it will be stored like this
// {
//     0: 10,
//     1: 20,
//     2: 30,
//     3: 40
// }

// symbols

const sym = Symbol("id");

const userr = {
    name: "Rohit",
    age: 20,
    [sym]:"Hello bais"
}

console.log(userr[sym])
