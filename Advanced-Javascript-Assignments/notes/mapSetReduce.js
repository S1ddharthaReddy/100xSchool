
// forEach, filter, reducer, map, set

// const arr = [10, 20, 30, "Ray", 90];

// arr.forEach((number)=>{
//     console.log(number);
// })   
// output 10 20 30 Ray 90

// arr.forEach((number, index)=>{
//     console.log(number, index);
// })

//output
// 10 0
// 20 1
// 30 2
// Ray 3
// 90 4

// -------------------------FILTER-------------------------

// const arr = [10, 2, 30, 40, 3, 78, 98]

// // filters from the array and returns a new array

// const newArr = arr.filter((number)=>{
//     return number > 25;
// })

// console.log(newArr); // output [ 30, 40, 78, 98 ]

// custom method 
// this/arr = [10, 2, 30, 40, 3, 78, 98]

// const compare = (number)=>number > 25;

// Array.prototype.filtering = function(compare){

//     const answer = [];
//     for(let num of this){
//         if(compare(num)){
//             answer.push(num);
//         }
//     }
//     return answer;
// }

// const newarr = arr.filtering((number)=>number>25);
// console.log(newarr);


// const a = [80, 50, 90, 23, 34];
// const an = a.filtering((num)=>num>25);
// console.log(an);

// ------------------------MAP------------------------------

// we can iterate the elements & modify it & return a new array

// const arr = [10, 20, 30, 5, 90, 87];

// const newArr = arr.map((num)=>num*2);
// console.log(newArr);

//custom map

// arr.mapping = function(callback){
//     let result = [];
//     for(let entry of this){
//         result.push(callback(entry));
//     }
//     return result;
// }

// ------------------------REDUCE-------------------------------

// iterate the array, and give a final value
// accumulator = sum = 0
// here products is an array which contains objects with prices, name, etc properties

// const totalPrice = products.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue.price;
// }, 0);

// console.log(totalPrice);

// ---------------------SET------------------------

// const arr = [12, 23, 12, 1, 2, 2,576,89]

// const s1 = new Set(arr);
// // console.log(s1);

// s1.add(11);

// // console.log(s1);
// // console.log(s1.has(11));

// s1.delete(12);
// console.log(s1);
// console.log(s1.size);

// s1.clear()  // deletes all elements

// ----------------------MAP key, value pair--------------------

const m1 = new Map([
    ["Raey", 20],
    [2, "Hell"],
    [true, 11],
    [[10, 30, 11], "More"]
]);

// console.log(m1);

//m1.clear() deletes all

m1.set({name:"Rane", age:89}, false);

// console.log(m1);
console.log(m1.has("Raey"));

console.log(m1.get("Raey"));

console.log(m1.size); // 5

// iterate

for(let [key, value] of m1){
    console.log(key, value);
}