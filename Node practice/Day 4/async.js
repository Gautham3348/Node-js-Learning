const express = require("express")
const axios = require("axios")

const app = express()

app.get("/users",async (req,res)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const names = response.data.map(users => users.name);
    res.json(names);
})

app.get("/city", async (req,res)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const city = response.data.map(city => city.address.city);
    res.json(city);
})

app.listen(5000,()=>{
    console.log("server running on the port 5000")
})