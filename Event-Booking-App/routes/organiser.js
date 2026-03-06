
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { orgraniserMiddleware } = require("../middleware/organiser")

const JWT_ORGANISER_PASSWORD = process.env.JWT_ORGANISER_PASSWORD;

const organiserRouter = Router();

organiserRouter.post("/signup", (req, res)=>{

})

organiserRouter.post("/signin", (req, res)=>{

})

organiserRouter.post("/event", (req, res)=>{

})

organiserRouter.put("/event", (req, res)=>{

})

organiserRouter.post("/event/all", (req, res)=>{

})