

// const fs = require("fs");

// // const contents = fs.readFileSync("a.txt", "utf-8");

// function fileReadCallback(err, contents){
//     console.log(contents);
//     console.log(contents);
//     console.log(contents);
// }

// const contents = fs.readFile("a.txt", "utf-8", fileReadCallback);


// let s = 0
// for(let i = 0;i<100000000;i++){
//     s += i
// }

// console.log(s); 

const a = 1;
const b = 2;

console.log(a);
console.log(b);

function callback() {
    console.log(a + b);
}

setTimeout(callback, 1000);






