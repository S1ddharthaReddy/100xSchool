
// Trying to code a todo app and store data into the array

const express = require("express");

const app = express();

app.use(express.json());

let todos = [];

app.post("/todos/create", (req, res)=>{
    const {todo} = req.body;

    const id = parseInt(req.body.id);

    if(!id){
        return res.send("id cannot be empty");
    }

    for(let i = 0;i<todos.length;i++){
        if(todos[i].id === id){
            return res.send("Todo already exists with ai " + id);
        }
    }

    const newTodo = {
        title: todo,
        id: id
    };

    todos.push(newTodo);
    res.send("todo added successfully");
})