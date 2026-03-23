const express = require("express")
const app = express()

app.use(express.json())

app.get("/allUsers",(req,res)=>{
    res.json(users);
})

app.post("/addUser", (req, res)=>{
    const {name, id} = req.body;
    
    if(!name || !id){
    return res.status(400).json({message:"Error, please enter the values"});
    res.json({name,id});
}

})

app.listen(3000, ()=>{
    console.log("server running on the port 3000")
})