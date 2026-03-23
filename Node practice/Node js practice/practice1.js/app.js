const express = require("express")
const connectDB = require("./config/db")
const rout = require("./routes/todoRoutes")

const app = express()

app.use(express.json())

connectDB();

app.use(rout)

app.listen(5000, ()=>{ console.log("server running")})