// start creating server here

const express = require("express");
const app = express();

app.use(express.json());

let todos = [];
let currentId = 1;

app.get('/todos', (req, res)=>{
    return res.json(todos);
})

app.post('/create/todo', (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;

    const newTodo = {
        id: currentId,
        title: title,
        description: description
    }

    todos.push(newTodo);
    currentId += 1;

    return res.json(todos);
})

app.get('/todo', (req, res)=>{
    const todoId = parseInt(req.query.id);

    const todo = todos.find(t => t.id === todoId);

    if(!todo){
        return res.status(400).send("Todo not found");
    }

    res.json(todo);

})

app.delete('/todo', (req, res)=>{
    const todoId = parseInt(req.query.id);

    const index = todos.findIndex(t => t.id === todoId);

    if(index === -1) return res.status(404).json({error: "Todo not found"});

    todos.splice(index, 1);

    res.status(200).json({message: "Todo deleted"});
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})
