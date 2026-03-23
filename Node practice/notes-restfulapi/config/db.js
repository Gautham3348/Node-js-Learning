const mongoose = require("mongoose")

const connectDB = async ()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017/notes")
    .then(()=>console.log("mongodb is connected succesfully"))
    .catch(err => console.log(err));
}

module.exports = connectDB;