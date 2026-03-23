const express = require("express")
const axios = require("axios")
const app = express()

app.get("/users1",(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{ res.json(response.data)})
    .catch(err => console.log(err));
})

app.listen(5000, ()=>{
    console.log("server running on the port 5000")
})