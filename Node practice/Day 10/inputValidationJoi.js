const express = require("express")
const Joi = require("joi")

const app = express()
app.use(express.json())

const schema = Joi.object({
    name : Joi.string().required(),
    id : Joi.number().required()
})

app.post("/userinfo", (req,res)=>{
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"some details are missing"})
    }
    res.json(req.body);
})

app.listen(5000, () => console.log("running on port 5000"));