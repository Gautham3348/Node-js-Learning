const express = require("express")

const app = express()

app.use(express.json())

const users = []

app.post("/users",(req,res)=>{
    const {user,age} = req.body;
    const nUser = {user,age};
    users.push(nUser);
    res.json(nUser)
})

app.get("/users",(req,res)=>{
    res.json(users);
})

app.listen(4000, ()=>{
    console.log("Server running on the port 4000");
})