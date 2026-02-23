

/*  Middlewares
In Express.js, middleware refers to functions that have access to the request object (req),
response object (res), and the next function in the application's request-response cyble.

Middleware functions can perform a variety of tasks, such as
1. Modifying the request or response objects.
2. Ending the request-response cycle.
3. Calling the next middleware function in the stack

the biggest use of middleware is authentication
*/

const express = require("express");

const app = express();

let requestCount = 0; // program to count no. of requests


function requestIncreaser(req, res, next){
    requestCount++;
    req.name = "Daemon"
    console.log("Total number of requests: " + requestCount);
    next();
    // or else it can end/stop the request
    // res.json({
    //     Message: "I ended the request early"
    // })
}

function realSumHandler(req, res){
    // requestCount(req, res);

    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    console.log(req.name);

    res.json({
        ans: a + b
    })
}

app.get("/sum", requestIncreaser, realSumHandler)

app.get("/multiply", requestIncreaser, function(req, res){

    // requestCount(req, res);

    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
})

app.get("/admin", requestIncreaser, function(req, res){
    res.json({
        message: `Total number of requests: ${requestCount}`
    })
})

// app.use(requestIncreaser); // Whne you write this all the route handlers after this, will automatically get the middleware
// global middleware

// app.get("/sum", realSumHandler)
// app.get("/multiply", function(req, res){})


// Express is nothing but chain of middlewares

app.listen(3000);

