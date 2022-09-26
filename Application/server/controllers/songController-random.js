const Song = require("../models/songModel");

// get a random song
const getRandomSong = async (req, res) => {
  try {
    const count = await Song.countDocuments();
    const random = Math.floor(Math.random() * count);
    const s = await Song.findOne().skip(random);
    res.status(200).json(s);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getRandomSong };
