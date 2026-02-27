
const bcrypt = require("bcrypt")
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {UserModel, TodoModel} = require("./db")
const { z } = require("zod");

const JWT_SECRET = "WinterIsComing";

mongoose.connect("mongodb+srv://s1ddhartha_reddy:i9a48n36@cluster0.liriy8b.mongodb.net/todo-app")

const app = express();

app.use(express.json());

app.post("/signup", async function(req, res){
    // zod
    const requiredBody = z.object({
        email: z.string().min(3).max(50).email(),
        name: z.string().min(3).max(50),
        password: z.string().min(3).max(30)
    })

    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    })

    res.json({
        message: "You are logged in"
    })
})

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    })

    if(!user){
        res.status(403).json({
            message:"User does not exist in our db"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
}

app.post("/todo", auth, async function(req, res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        message:"Todo Created"
    })
})

app.get("/todos", auth, async function(req, res){
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })
})

app.listen(3000)