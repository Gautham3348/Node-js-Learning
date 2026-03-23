const mongoose = require("mongoose")

const connectDB = async ()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017/todos")
    .then(()=>console.log("Mongodb is connected successfully"))
    .catch(err => console.log("Error in the code ", err))
}

module.exports = connectDB;