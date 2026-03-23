const express = require("express")
const router = express.Router()
const noteController = require("../controllers/noteController")

router.post("/notes", noteController.postNote)
router.get("/notes", noteController.getNote)
router.put("/notes/:id", noteController.putNote)
router.delete("/notes/:id", noteController.deleteNote)

module.exports = router;