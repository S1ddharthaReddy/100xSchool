
/*
Assignment #1 on Middleware
Create a middleware function that logs each incoming request's HTTP method, URL, and timestamp
to the console

Assignment 2 - already done in middleware.js
question of assignment2 - Create a middleware that counts total number of requests sent to a server. also create an endpoint that
exposes it
*/

const express = require("express")

const app = express();

function middleware(req, res, next){
    console.log(`Method is ${req.method}`);
    console.log(`Method is ${req.originalUrl}`)
    console.log(`Host is ${req.hostname}`)
    console.log(`Time: ${new Date()}`)

    next();
}

app.use(middleware);

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
})

app.get("/multiply", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000")
})
