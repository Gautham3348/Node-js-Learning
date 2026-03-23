const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/users")
.then(()=>{console.log("mongodb is connected successfully")}).catch(err => console.log(err))

const thirdSchema = new mongoose.Schema();

const ThirdUser = mongoose.model("ThirdUser",thirdSchema);

app.post("/addsecond", async (req,res)=>{
        const thiruser =  await ThirdUser.create(req.body);
        res.status(200).json(thiruser);
})


app.listen(5000, ()=>{
    console.log("server is running on the port 5000");
})