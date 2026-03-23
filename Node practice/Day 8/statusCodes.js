const express = require("express")

const app = express()
app.use(express.json())

const users = []

app.get("/",(req, res)=>{
    res.send("Welcome to Home Page");
})

app.get("/allUsers",(req,res)=>{
    res.status(201).json(users);
})

app.post("/addUser", (req, res)=>{
    const {name, id} = req.body;
    users.push({name,id});
    res.json({name,id});
})

app.listen(5000, ()=>{
    console.log("server running on the port 3000")
})