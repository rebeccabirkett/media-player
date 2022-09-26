const Playlist = require("../models/playlistModel");
const mongoose = require("mongoose");

// get all playlists
const getPlaylists = async (req, res) => {
  const playlists = await Playlist.find({}).sort({ createdAt: -1 });

  res.status(200).json(playlists);
};

// get a single playlist
const getPlaylist = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such playlist" });
  }

  const playlist = await Playlist.findById(id);

  if (!playlist) {
    return res.status(404).json({ error: "No such playlist" });
  }

  res.status(200).json(playlist);
};

// create new playlist
const createPlaylist = async (req, res) => {
  const { title, songs } = req.body;

  // add doc to db
  try {
    const playlist = await Playlist.create({ title, songs });
    res.status(200).json(playlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a playlist
const deletePlaylist = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such playlist" });
  }

  const playlist = await Playlist.findOneAndDelete({ _id: id });

  if (!playlist) {
    return res.status(400).json({ error: "No such playlist" });
  }

  res.status(200).json(playlist);
};

// update a playlist
const updatePlaylist = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such playlist" });
  }

  const playlist = await Playlist.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!playlist) {
    return res.status(400).json({ error: "Could not update playlist" });
  }
  const returnPlaylist = await Playlist.findById(id);
  if (!returnPlaylist) {
    return res.status(400).json({ error: "Could not get playlist to return" });
  }

  res.status(200).json(returnPlaylist);
};

module.exports = {
  createPlaylist,
  getPlaylists,
  getPlaylist,
  deletePlaylist,
  updatePlaylist,
};
