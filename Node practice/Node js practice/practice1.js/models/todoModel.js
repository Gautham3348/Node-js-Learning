const mongoose = require("mongoose")

const todoSchema  = new mongoose.Schema({
    notes : String
})

module.exports = mongoose.model("FirstTask", todoSchema);