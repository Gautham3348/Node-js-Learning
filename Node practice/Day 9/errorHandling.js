const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/users")
.then(()=>{console.log("mongodb is connected successfully")}).catch(err => console.log(err))

const secondSchema = new mongoose.Schema();

const SecondUser = mongoose.model("SecondUser",secondSchema);

app.post("/addsecond", async (req,res)=>{
    try{
        const secuser =  await SecondUser.create(req.body);
        res.status(200).json(secuser);
    }
    catch{
        res.status(500).json({message : "Error while sending the data"})
    }
})

app.get("/firstusers", async (req,res)=>{
    const secuser =  await SecondUser.find();
    res.json(secuser);
})

app.listen(5000, ()=>{
    console.log("server is running on the port 5000");
})