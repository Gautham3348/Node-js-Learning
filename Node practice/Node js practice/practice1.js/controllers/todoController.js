const Task = require("../models/todoModel");

module.exports.tasks = async (req,res)=>{
 const task = Task.create(req.body);
 res.send(task); 
}