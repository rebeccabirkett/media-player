const Song = require("../models/songModel");

// search for a song
const searchSong = async (req, res) => {
  const { key } = req.query;
  const search = key
    ? {
        $or: [{ name: { $regex: key, $options: "$i" } }],
      }
    : {};
  const { data } = await Song.find(search);

  res.status(200).json(data);
};

module.exports = {
  searchSong,
};
