const express = require("express")

const app = express()

app.get("/home", (req,res)=>{
    res.send("Welcome to Homepage");
})

app.listen(4000,()=>{
    console.log("Server is running on the port 4000")
})