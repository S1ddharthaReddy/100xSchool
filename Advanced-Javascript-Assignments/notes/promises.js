
// A promise in js is an object that represents the eventual completion or failure
// of an asynchronous operation and its resuting value. Promises are used to handle asynchronous
// operations more effectives than traditional callback functions, providing a cleaner and more
// manageble way to deal with code that executes asynchronous, such as API calls, file I/O or timers

// promises are alternatives to alternative of callbacks

// const content = fs.readFileSync("a.txt", "utf-8");
// console.log(content);

// const fs = require("fs");

// function afterFileIsRead(err, contents){
//     console.log(contents);
// }

// let contents = fs.readFile("a.txt", "utf-8", afterFileIsRead);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

const fs = require("fs");

// function callback(data){
//     if(err){
//         console.log("error while reading the file");
//     }
//     else{
//         console.log(data);
//     }
// }

// fs.readFile("a.txt", "utf-8", callback);


function fsReadFilePromisified(filePath, encoding){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

function callback(data){
    console.log(data);
}

function callbackErr(){
    console.log("error while reading the file");
}

fsReadFilePromisified("a.txt", "utf-8")
    .then(callback)
    .catch(callbackErr)




