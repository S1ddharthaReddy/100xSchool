require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter)
app.use("/course", courseRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL)

    app.listen(PORT, ()=>{
        console.log(`server running on the port ${PORT}`)
    })
}

main();