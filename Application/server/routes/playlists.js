const express = require("express");
const Playlist = require("../models/playlistModel");

const router = express.Router();

// GET all playlists
router.get("/", (req, res) => {
  res.json({ mssg: "GET all playlists" });
});

// GET a playlist
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a playlist" });
});

// POST a playlist
router.post("/", async (req, res) => {
  const { title } = req.body;

  try {
    const playlist = await Playlist.create({ title });
    res.status(200).json(playlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ mssg: "POST a playlist" });
});

// DELETE a playlist
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a playlist" });
});

// UPDATE a playlist
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a playlist" });
});

module.exports = router;
