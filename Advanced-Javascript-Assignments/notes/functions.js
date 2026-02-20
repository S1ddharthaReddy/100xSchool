
// functions, callbacks, arrow functions

// function greeting(){
//     console.log("Hello Coder Army, Strike is coming on soon");
// }

// greeting(); // Hello Coder Army, Strike is coming on soon

// rest operator
// function addNumber(...num){
//     let sum = 0;
//     for(let n of num){
//         sum += n;
//     }
//     console.log(sum);
// }

// addNumber(6, 7);
// addNumber(6, 7, 8);
// addNumber(6, 7, 8, 9);

// difference between spread & rest operator

// const arr = [10, 20, 30, 40, 50];

// const [first, second, ...num] = arr;
// console.log(first, second, num); // 10 20 [ 3, 40, 50 ]



//--------------------- second to create function -----------------

// function: expression

// const addNumber = function(num1, num2){
//     return num1 + num2;
// }

// console.log(addNumber); // [Function: addNumber]


// --------------------arrow functions----------------------

// const addNumber = (num1, num2)=>{
//     console.log(num1 + num2)
// }

// const addNumber = (num1, num2) => num1 + num2;

// console.log(addNumber(23, 56));

// const squareNumber = (num) => num*num;

// // if you have only one parameter you can use without bracket
// // const squareNumber = num => num*num;

// console.log(squareNumber(54));

// const greeting = () => {
//     return {
//         name: "Rohit",
//          age: 20
//     }
// }

// // const greeting = () => {{name: "Rohit", age:20}};

// console.log(greeting());


// ------------IIFE-------------------------
// Immediately Invoked Function
// to run the function immediately, automatically called

// (function greeting(){
//     console.log("Hello jiii") // output - Hello jiii
// })();

// -----------------------Callbacks----------------------
/*
A callback function in javascript is a function passed as an argument to another
function. 
*/

// function greet(){
//     console.log("Hello jii, kaise hoo");
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
//     console.log("I have finished meeting")
// }

// meet(greet);
// greet(dance);

function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount, callback){
    console.log(`${amount} payment has initialized`);
    console.log(`Payment is received`);
    callback();
    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna profit
}

payment(500, zomatoOrderPlaced);
payment(500, blinkitOrderPlaced);
