
/*
Authentication
The process of letting users sign in/ sign out of your website. Making sure your routes are protected and users can only get 
back their own data and not the data from a different user.

JWT - Token based authentication

-> Auth basiss
-> JWT (JSON Web Tokens)
-> Authorization
-> Creating your own auth middleware
-> localstorage
*/

const express = require("express")

const app = express();

app.use(express.json());

/*
    [{
        username: "Daemon",
        password: "23421212",
        token: "asdfsnowjenoewnor"
    }]
*/
const users = [];

function generateToken(length = 32) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }

  return token;
}

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in"
    })

    console.log(users);
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u){
        if(u.username === username && u.password === password) return true;
        else return false;
    })

    if(foundUser){
        const token = generateToken();
        foundUser.token = token;
        res.json({
            message: token
        })
    }
    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

    console.log(users);
})

// creating an authenticated endpoint
// Let's create an endpoint (/me) that returns the user their information only if they send their token

app.get("/me", (req, res)=>{
    const token = req.headers.token;
    let user = users.find(user => user.token === token);
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

// Tokens vs JWTs
// there is a problem with using stateful tokens
// stateful here, we mean that we need to store these tokens in a variable right now
// (eventually in a database)
// stateful -> stored somewhere -> in a variable or database

// problem
// the problem is that we need to send a request to the database every time the user wants to
// hit the authenticated endpoint

//solution -> JWT

app.listen(3000);