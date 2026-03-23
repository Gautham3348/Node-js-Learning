const express = require("express");
const app = express();

class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

app.get("/users", (req,res, next)=>{
    const user = null;
    if(!user){
        return next(new AppError("Users not found", 404))
    }
    res.json(user);
    })

app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({message : err.message})
})

app.listen(4000, () => console.log("Server running"));