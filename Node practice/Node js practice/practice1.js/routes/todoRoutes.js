const express = require("express")
const router = express.Router()
const controller = require("../controllers/todoController");

router.post("/tasks", controller.tasks);

module.exports = router