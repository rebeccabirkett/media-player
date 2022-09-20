const express = require("express");
const {
  createPlaylist,
  getPlaylist,
  getPlaylists,
  deletePlaylist,
  updatePlaylist,
} = require("../controllers/playlistController");

const router = express.Router();

// GET all playlists
router.get("/", getPlaylists);

// GET a playlist
router.get("/:id", getPlaylist);

// POST a playlist
router.post("/", createPlaylist);

// DELETE a playlist
router.delete("/:id", deletePlaylist);

// UPDATE a playlist
router.patch("/:id", updatePlaylist);

module.exports = router;
