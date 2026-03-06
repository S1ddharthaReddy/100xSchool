
const { Router } = require("express");
const jwt = require("jsonwebtoken");

const userRouter = Router();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const {userMiddleware} = require("../middleware/user");

userRouter.post("/signup", (req, res)=>{

})

userRouter.post("/signin", (req, res)=>{

})

userRouter.get("/purchases", userMiddleware, (req, res)=>{

})

module.exports = {
    userRouter: userRouter
}