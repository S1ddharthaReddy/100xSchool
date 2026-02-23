
const express = require("express")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "WinterIsComing"

const app = express();

app.use(express.json());

let users = [];

app.post("/signup", (req, res)=>{
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

app.post("/signin", (req, res)=>{
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

app.get("/me", (req, res)=>{
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    const username = decodedData.username;

    let user = users.find(user => user.username === username);
    if(user){
        res.send({
            username: user.username,
            password: user.password
        })
    }
    else{
        res.status(401).send({
            message: "Unauthorized/Token invalid"
        })
    }
})

app.listen(3000);