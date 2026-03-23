const Task = require("../models/todoModel")

module.exports.addTask= async(req,res)=>{
    try{
        const task = await Task.create(req.body);

        res.status(201).json(task)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports.allTasks = async(req,res)=>{
    try{
        const task = await Task.find();

        res.status(200).json(task)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}