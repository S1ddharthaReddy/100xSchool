
// a promise in javascript is an object 


const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data){
//     if(err){
//         console.log("error while reading the file");
//     }
//     else console.log(data);
// })

// const p = new Promise((resolve, reject)=> resolve);

// console.log(p);

// create a promisified version of fs.readFile
// create a promisified version of setTimeout
// create a promisified version of fs.writeFile


// function fsReadFilePromise(fileName, encoding){
//     return new Promise(function(resolve, reject){
//         fs.readFile(fileName, encoding, function(err, data){
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     });
// }

// fsReadFilePromise("a.txt", "utf-8")
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(e){
//         console.log("Error while reading the file");
//     })


// promisifed of settimeout

// function setTimeoutPromisifed(delay){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve();
//         }, 1000)
//     });
// }

// setTimeoutPromisifed(1000)
//     .then(function(){
//         console.log("1 second have passed")
//     })
//     .catch(function(){
//         console.log("an error came");
//     })
//     .finally(function(){
//         console.log("It will always get called");
//     })


function fsReadFilePromise(fileName, encoding){
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, encoding, function(err, data){
            if(err){
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    });
}

// 2nd way to call promises - async & await

async function main() {
    let file1Contents = await fsReadFilePromise("a.txt", "utf-8")
    let file2Contents = await fsReadFilePromise("b.txt", "utf-8")
    let file3Contents = await fsReadFilePromise("c.txt", "utf-8")

    console.log(file1Contents)
    console.log(file2Contents)
    console.log(file3Contents)
}

main()



