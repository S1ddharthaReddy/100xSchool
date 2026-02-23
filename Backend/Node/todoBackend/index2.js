
const express = require("express");
const app = express();

let todos = [];

app.post('/post', function(req, res){
    // create a random id for the todo
    // extract the todo title from the body
    todos.push({
        title,
        id
    })
})

app.delete('/', function(req, res){
    // extract the todo id
    // remove the todo from here
})

app.get('/', function(req, res){
    res.json({
        todos: []
    })
})

// easy - store the data in memory
// hard - store the data in file, todo.json
// add users