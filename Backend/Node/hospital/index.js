
// creating an http server
// express
// is express default library in node -> no
// so we have to install it with, npm install express

// GET - User can check how many kidneys they have and their health
// POST - User can add a new kidney
// PUT - User can replace a kidney, make it healthy
// DELETE - User can remove a kidney

const express = require("express");

const app = express();

const users = [
    {
        name: "John",
        kidneys: [{
            healthy: false
        }]
    }
];

app.get('/', function(req, res){
    // write logic -> that returns how many kidneys he have & healthy
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i = 0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys++;
        }
    }
    const noOfUnhealthyKidneys = numberOfKidneys - noOfHealthyKidneys;
    res.json({
        johnKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})

app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message: "Done"
    })
})

app.listen(3000);