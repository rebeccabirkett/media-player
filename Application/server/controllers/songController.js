const Song = require("../models/songModel");
const mongoose = require("mongoose");

// get all songs
const getSongs = async (req, res) => {
  const songs = await Song.find({}).sort({ createdAt: -1 });

  res.status(200).json(songs);
};

// get a single song
const getSong = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such song" });
  }

  const song = await Song.findById(id);

  if (!song) {
    return res.status(404).json({ error: "No such song" });
  }

  res.status(200).json(song);
};

// create new song
const createSong = async (req, res) => {
  const { id, title, artist, album, image } = req.body;

  // add doc to db
  try {
    const song = await Song.create({ id, title, artist, album, image });
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a song
const deleteSong = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such song" });
  }

  const song = await Song.findOneAndDelete({ _id: id });

  if (!song) {
    return res.status(400).json({ error: "No such song" });
  }

  res.status(200).json(song);
};

// update a song
const updateSong = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such song" });
  }

  const song = await Song.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!song) {
    return res.status(400).json({ error: "No such song" });
  }

  res.status(200).json(song);
};

module.exports = {
  createSong,
  getSongs,
  getSong,
  deleteSong,
  updateSong,
};
