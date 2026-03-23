const express = require("express")

const app = express()
app.use(express.json())

const users = []

app.get("/",(req, res)=>{
    res.send("Welcome to Home Page");
})

app.get("/allUsers",(req,res)=>{
    res.json(users);
})

app.post("/addUser", (req, res)=>{
    const {name, id} = req.body;
    users.push({name,id});
    res.send({name,id});
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id
    const { name } = req.body
    const user = users.find(u => u.id == id)
    user.name = name
    res.json(user)
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id
    const index = users.findIndex(u => u.id == id)
    const deletedUser = users.splice(index, 1)
    res.json(deletedUser);
})

app.listen(5000, ()=>{
    console.log("server running on the port 3000")
})