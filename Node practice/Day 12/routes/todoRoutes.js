const express = require("express")
const router = express.Router()
const toDo = require("../controllers/toDoControllers")

router.post("/addtask", toDo.addTask);
router.get("/alltasks", toDo.allTasks);

module.exports = router