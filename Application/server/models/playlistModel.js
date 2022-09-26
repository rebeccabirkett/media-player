const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    songs: {
      type: [{ type: mongoose.Schema.Types.ObjectId }],
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Playlist", playlistSchema);
