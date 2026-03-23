const express = require("express")

const app = express()

app.use(express.json())

const student = []

app.post("/students",(req,res)=>{
    const{sname, sid, sbranch} = req.body;
    const newStudent = {sname,sid,sbranch}
    student.push(newStudent);
    res.json(newStudent);
})

app.get("/students",(req,res)=>{
    res.json(student);
})

app.listen(4000, ()=>{
    console.log("Server running on the port 4000");
})