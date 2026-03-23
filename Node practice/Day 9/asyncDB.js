const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/users")
.then(()=>{
    console.log("mongodb is connected successfully")
}).catch(err => console.log(err))

const firstSchema = new mongoose.Schema();

const FirstUser = mongoose.model("FirstUser",firstSchema);

app.post("/addfirst", async (req,res)=>{
    const fuser =  await FirstUser.create(req.body);
    res.json(fuser);
})

app.get("/firstusers", async (req,res)=>{
    const fuser =  await FirstUser.find();
    res.json(fuser);
})

app.listen(5000, ()=>{
    console.log("server is running on the port 5000");
})