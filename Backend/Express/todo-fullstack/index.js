
// create a todo application without using db

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "WinterIsComing"

const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index-todo.html");
})

app.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,  // in short -> username
        password: password,
        todos: []
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

app.post("/todos", auth, (req, res)=>{

    const todo = req.body.todo;

    const user = users.find(user => user.username === req.username);

    user.todos.push({
        id: Date.now(),
        title: todo,
        completed: false
    });

    res.json({
        message: "Todo added"
    });
})

app.get("/todos", auth, (req, res) => {
    const user = users.find(u => u.username === req.username);

    res.json({
        todos: user.todos
    });
});

app.delete("/todos/:id", auth, (req, res)=>{
    const user = users.find(user => user.username === req.username);

    const todoId = parseInt(req.params.id);

    const todoIndex = user.todos.findIndex(t => t.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    user.todos.splice(todoIndex, 1);

    res.json({
        message: "Todo deleted successfully"
    });
})

app.listen(3000);