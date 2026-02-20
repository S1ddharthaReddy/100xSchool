
// map, filter, arrow functions

// function sum(a, b){
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// const ans = sum(1, 2);
// console.log(ans);

// app.get("/", (req, res)=>{

// })

// // the above is same as

// app.get("/", function(req, res){

// })

// map

// problem statement - given an array, five me back a new array in which every value is multiplied 
// by 2

// [1, 2, 3, 4, 5]

const input = [1, 2, 3, 4, 5];

function transform(i) {
    return i * 2;
}

input.map(transform);
console.log(ans);

const ans = input.map(function(i){
    return i * 2;
});
console.log(ans);


