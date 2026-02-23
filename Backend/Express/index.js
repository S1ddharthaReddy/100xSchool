
// async function getRecentPost(){
//     console.log("before sending request");
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data = await response.json();
//     console.log(data);
//     console.log("request has been processed")
// }

// getRecentPost();

// Assignment
// Create an http server that has 4 routes - /multiply?a=1&b-2 - similarly for add, divide, subtract

// step 1 - npm init -y

// step 2 = npm install express

const express = require("express");

const app = express();

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a+b
    })
})

app.get("/multiply", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a*b
    })
})

app.get("/subtract", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a-b
    })
})

app.get("/divide", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a/b
    })
})

// now we want dynamic endpoints -> sum/10/20

app.get("/add/:firstArgu/:secondArgu", function(req, res){
    const a = parseInt(req.params.firstArgu);
    const b = parseInt(req.params.secondArgu);

    res.json({
        answer: a+b
    })
})

app.listen(3000);



