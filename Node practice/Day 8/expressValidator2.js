const express = require("express")
const {body, validationResult} = require("express-validator");

const app = express()
app.use(express.json())

app.post("/login", body("email").isEmail().withMessage("Not a valid email"),
body("password").isLength({min:5}), (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }
    res.json(req.body);
})

app.listen(5000, ()=>{
    console.log("Server is running on the port 5000");
})