
/*
Assignment
Create a backend server in nodejs that returns the sum endpoint
and write a html file, that hits the backend server using the fetch api
*/

const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());

app.post("/sum", function(req, res){
    const a = req.body.a;
    const b = req.body.b;

    res.json({
        answer: a+b
    })
})

app.listen(3000);