
const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");

const userRouter = Router();

const {JWT_USER_PASSWORD} = require("../config")

const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async (req, res)=>{
    const {email, password, firstName, lastName} = req.body; // todo - adding zod validation

    // todo - hash the password so plain text password is not stored in the DB
    
    // todo - put inside a try catch block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup succeeded"
    })
})

userRouter.post("/signin", async (req, res)=>{
    const {email, password} = req.body;

    // todo - ideally password should be hashed, and hence you can't compare the user provided password and the database
    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        // Do cookie logic

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

userRouter.get("/purchases", userMiddleware, async (req, res)=>{

    const userId  = req.userId;

    const purchases = await purchaseModel.find({
        userId
    })

    const coursesData = await courseModel.find({
        _id: {$in: purchases.map(x => x.courseId) }
    })

    res.json({
        purchases,
        coursesData
    })
})

module.exports = {
    userRouter: userRouter
}