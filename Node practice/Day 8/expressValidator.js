const express = require("express")
const {body, validationResult} = require("express-validator")

const app = express()
app.use(express.json())

app.post("/addUser", body("name").notEmpty().withMessage("Enter name"), 
body("email").isEmail().withMessage("Email is required"), (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({message:"Error"})
    }
    res.json(req.body)
})

app.listen(5000, ()=>{
    console.log("Server is running on the port 5000");
})