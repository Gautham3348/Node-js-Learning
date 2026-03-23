const express = require("express")
const axios = require("axios")

const app = express()

app.get("/users",async (req,res)=>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.json(response.data);
    }
    catch(error){
        res.status(500).send("Error while fetching the apis");
    }
})

app.listen(5000,()=>{
    console.log("server running on the port 5000")
})