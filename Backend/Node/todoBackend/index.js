
const express = require("express");
const app = express();


// route handlers
app.get('/', function(req, res){
    res.send("<b>Hiii there </b>");
})

app.get('/asd', function(req, res){
    res.send("hello from the asd endpoint");
})

app.post('/post', function(req, res){
    res.send("hello from the post endpoint");
})

app.listen(3000); // which port do you want to listen