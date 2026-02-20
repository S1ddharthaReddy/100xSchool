
/* 

Promise class gives you a promise, that i will return you something in 
the future

similar to setTimeout(fn, 3000)


*/

function logName(){
    console.log("Siddhu");
}

setTimeout(logName, 3000);

// callback based approach
// promise based approach

// using a promise is easy & defining a promise is hard


// function main() {

// }

// setTimeout(main, 3000);

/* 
    Callback version - setTimeout(callback, 3000);
    Promisified version - setTimeoutPromisified(3000).then(callback)

*/


