const express = require("express");
const {
  createSong,
  getSong,
  getSongs,
  deleteSong,
  updateSong,
} = require("../controllers/songController");

const router = express.Router();

// GET all songs
router.get("/", getSongs);

// GET a song
router.get("/:id", getSong);

// POST a song
router.post("/", createSong);

// DELETE a song
router.delete("/:id", deleteSong);

// UPDATE a song
router.patch("/:id", updateSong);

module.exports = router;
