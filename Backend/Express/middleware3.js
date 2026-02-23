
/*
Commonly used middlewares

1. express.json
the express.json() middleware is a built-in middleware function in Express.js used to parse
incoming request bodies that are formatted as JSON. This middleware is essential for handling
JSON payloads sent by clients in POST or PUT requests

2. cors - Cross Origin Resource Sharing
cors is security feature implemented by web browsers that controls how resource on a
web server can be requested from another domain. It's a crucial mechanism for managing
cross-origin requests and ensuring secure interactions between different origins on the web
*/

const express = require("express");

const app = express();

// in Expres, if you want to send JSON data
// you need to first parse the json data


//In Express.js, app.use(express.json()) is used to convert incoming
// JSON data into a JavaScript object so you can access it using req.body.
app.use(express.json()); 

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b
    })
})

app.listen(3000)