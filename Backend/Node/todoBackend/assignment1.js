
// create a todo application using node & express

const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

// get all
app.get('/', function(req, res){
    res.json({
        todos: todos
    })
})

// post
app.post('/post', function(req, res){
    const { title } = req.body;

    if(!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const id = Date.now();

    const newTodo = {
        id, 
        title
    };

    todos.push(newTodo);

    res.status(201).json({
        message:"Todo created",
        todo: newTodo
    });
});

// delete
app.delete('/:id', function(req, res){
    const id = parseInt(req.params.id);

    const initialLength = todos.length;

    todos = todos.filter(todo => todo.id !== id);

    if(todos.length === initialLength){
        return res.status(404).json({
            message: "Todo not found"
        })
    }

    res.json({message: "Todo deleted"});
})


// update todo
app.put('/:id', function(req, res){
    const id = parseInt(req.params.id);
    const { title } = req.body;

    if(!title) {
        return res.status(400).json({
            message:"Title is required"
        })
    }

    const todo = todos.find(todo => todo.id === id);
    if(!todo){
        return res.status(400).json({
            message: "Title is required"
        })
    }
    
    todo.title = title;

    res.json({
        message: "Todo updated successfully",
        todo: todo
    })
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})