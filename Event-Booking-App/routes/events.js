
const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");

const eventRouter = Router();

eventRouter.post("/purchase", userMiddleware, (req, res)=>{

})

eventRouter.get("/preview", (req, res)=>{

})

module.exports = {
    eventRouter: eventRouter
}