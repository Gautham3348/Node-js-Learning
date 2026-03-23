const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    slno : {
        type : Number,
        required : true
    },
    task : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Task", todoSchema);