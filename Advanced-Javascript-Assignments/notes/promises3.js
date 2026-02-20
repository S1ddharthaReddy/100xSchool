// Q - Write a function that
//  1. Reads the contents of a file
//  2. Trims the extra space from left and right
//  3. Writes it back to the file

// Approach #1 (sync for calls) - synchronous way

/*
const fs = require("fs");

function cleanFileSync(filePath){
    let contents = fs.readFileSync("a.txt", "utf-8");
    const trimmedContents = contents.trim();
    fs.writeFileSync("a.txt", trimmedContents);
}

cleanFileSync("a.txt");

*/

// Approach #2 (callback based, async function calls) - asynchronous way

/*
const fs = require("fs");

function cleanFile(filePath, cb) {
    fs.readFile("a.txt", "utf-8", function(err, contents){
        const trimmedContents = contents.trim();
        fs.writeFile("a.txt", trimmedContents, function(){
            cb();
        });
    });
}

cleanFile("a.txt", function(){
    console.log("Done cleaning a.txt");
});
*/

// Aproach #3 - Promise based - but no async await

/*
const fs = require("fs");

function cleanFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf-8", function (err, contents) {
            if (err) {
                reject();
            } else {
                const trimmedContents = contents.trim();

                fs.writeFile("a.txt", trimmedContents, function (err) {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
}

cleanFile("ad.txt")
    .then(function () {
        console.log("file has been cleaned");
    })
    .catch(function () {
        console.log("error while cleaning the file");
    });
*/

// Approach #4 - Promise based, with async await


/*
const fs = require("fs");

function cleanFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf-8", function (err, contents) {
            if (err) {
                reject();
            } else {
                const trimmedContents = contents.trim();

                fs.writeFile("a.txt", trimmedContents, function (err) {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
}

async function main(){
    try{
        await cleanFile("a.txt")
        console.log("done cleaning the file");
    }
    catch(e){
        console.log("error while cleaning the file");
    }
}

main();

*/

// write a promisified function that takes a file prefix as an input (a)
// and cleans ({prefix}1.txt), {prefix}2.txt, {prefix}3.txt

const fs = require("fs");

function cleanFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf-8", function (err, contents) {
            if (err) {
                reject();
            } else {
                const trimmedContents = contents.trim();

                fs.writeFile(filePath, trimmedContents, function (err) {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
}

// function cleanManyFiles(prefix) {
//     return new Promise(async function(resolve, reject){
//         try{
//             await cleanFile(prefix + "1.txt");
//             await cleanFile(prefix + "2.txt");
//             await cleanFile(prefix + "3.txt");
//             resolve();
//         }
//         catch(e){
//             reject();
//         }
//     })
// }

// even shorter & clean way to write cleanManyFiles

async function cleanManyFiles(prefix) {
    await cleanFile(prefix + "1.txt");
    await cleanFile(prefix + "2.txt");
    await cleanFile(prefix + "3.txt");
    return "hi there"   
}



// the above should converted to a function

cleanManyFiles("a")
    .then(function(){
        console.log("all 3 files have been cleaned");
    })
    .catch(function(){
        console.log("error")
    })




