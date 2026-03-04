
const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel } = require("../db");
const { courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req, res)=>{
    // you would expect the user to pay you money

    const userId = req.userId;
    const courseId = req.body.courseId;

    // should check that the user has actually paid the price
    await purchaseModel.create({
        userId, 
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    })
})

courseRouter.get("/preview", async (req, res)=>{

    const courses = await courseModel.find({});

    res.json({
        courses
    })
})


module.exports = {
    courseRouter: courseRouter
}