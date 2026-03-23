const express = require("express")
const connectDB = require("./config/db")
const noteRoutes = require("./routes/noteRoutes")

const app = express()

app.use(express.json())

connectDB();

app.use(noteRoutes);

app.listen(5000, ()=>{
    console.log("server is running on 5000")
})