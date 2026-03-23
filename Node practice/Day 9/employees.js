const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/employees")
.then(()=>console.log("Mongodb is connected successfully"))
.catch(err => console.log(err))

const empSchema = new mongoose.Schema({
    ename : String,
    eid : Number,
    econtact : Number
})

const Employee = mongoose.model("Employee",empSchema);

app.post("/addemp", async(req,res)=>{
    const emp = await Employee.create(req.body)
    res.json(emp);
})

app.get("/employees", async(req,res)=>{
    const emp = await Employee.find()
    res.json(emp)
})

app.listen(5000, ()=>{
    console.log("server running on the port 5000")
})