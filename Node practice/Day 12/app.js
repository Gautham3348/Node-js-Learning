const express = require("express")
const connectDB = require("./config/db")
const router = require("./routes/todoRoutes")

const app = express()

app.use(express.json())

connectDB();

app.use(router)

app.listen(5000, ()=>{
    console.log("server running on the port 5000");
})