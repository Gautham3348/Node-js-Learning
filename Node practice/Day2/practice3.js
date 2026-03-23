import express from "express";

const app = express()

app.get("/",(req,res)=>{
    res.send("Hi threre!!");
})

app.listen(5000, ()=>{
    console.log("server running on the port 5000");
    console.log("Hi");
})
