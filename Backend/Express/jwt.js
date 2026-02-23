
/*      JWT
JSON Web Tokens are a compact and self-contained way to represent information
between two parties. They are commonly used for authentication and information
exchange in web applications

JWTs are Stateless: JWTs contain all the information needed to authenticate a request
so the server doesn't need to store session data. all the data is stored in the token
itself

Replace token logic with JWT
1. Install the jsonwentoken
2. Get rid of our generateToken function
3. Create a JWT_SECRET variable
4. Create a jwt for the user instead of generating a token
*/

const express = require("express")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "randomjonsnowtheking"

const app = express();

app.use(express.json());

const users = [];

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

    let foundUser = users.find(function(u){
        if(u.username === username && u.password === password) return true;
        else return false;
    })

    if(foundUser){
        //concert their username into JWT
        const token = jwt.sign({ 
            username: username
        }, JWT_SECRET); 
        // foundUser.token = token;
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

app.get("/me", (req, res)=>{
    const token = req.headers.token; // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // json object - {username: 'aegon targaryen}

    const username = decodedInformation.username;

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