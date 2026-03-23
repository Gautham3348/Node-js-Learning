const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    id:{type : Number, required:true},
    notes:{type:String, required:true}
})
module.exports = mongoose.model("FirstNote",NoteSchema)