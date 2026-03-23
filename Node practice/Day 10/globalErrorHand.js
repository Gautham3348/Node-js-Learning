const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/users").then(()=>console.log("mongo db connected successfully"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema();

const FourthUsers = mongoose.model("FourthUsers",userSchema);

app.post("/addfourth", async(req,res, next)=>{
    try{
         const fourthusers = await FourthUsers.create(req.body);
         res.status(200).json(fourthusers);
    }
    catch (err){
        next(err)
    }
})

app.use((err, req, res, next)=>{
    console.log(err.message);
    res.json({message : "Something went wrong"})
})

app.listen(5000, ()=>{
    console.log("Server running");
})