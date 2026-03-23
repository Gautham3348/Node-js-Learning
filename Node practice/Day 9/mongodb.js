const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/users")
.then(()=>console.log("Mongodb is connected successfully")).
catch(err=>console.log(err));

const userSchema = new mongoose.Schema({
    name : String,
    age : Number
})

const User = mongoose.model("User",userSchema);

app.post("/addUser", async(req,res)=>{
    const user = await User.create(req.body);
    res.json(user);
})

app.get("/users", async(req,res)=>{
    const users = await User.find();
    res.json(users);
})

app.listen(5000,()=>{
    console.log("server running on the port 5000");
})