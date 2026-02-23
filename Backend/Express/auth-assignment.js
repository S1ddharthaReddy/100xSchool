
// Assignment
// Creating an auth middleware
// can you try creating a middleware called auth that verifies if a user is logged
// in and ends the request early is the user isn't logged in?

const express = require("express")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "WinterIsComing"

const app = express();

app.use(express.json());

let users = [];

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET)
    if(decodedData){
        req.username = decodedData.username;
        next();
    }
    else{
        res.json({
            message: "You are not logged in"
        })
    }
}

app.post("/signup", auth, (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,  // in short -> username
        password: password
    })

    res.json({
        message: "You are signed in"
    })

})

app.post("/signin", auth, (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }

    if(!foundUser){
        res.json({
            message: "Your credentials are in-correct"
        })
    }
    else{
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.header("jwt", token) // sending token via res

        res.json({
            token: token
        })
    }
})

app.get("/me", auth, (req, res)=>{
    
    let foundUser = null;

    for(let i = 0;i<users.length;i++){
        if(users[i].username === req.username){
            foundUser = users[i];
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
})

app.listen(3000);