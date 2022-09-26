require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const playlistRoutes = require("./routes/playlists");
const songRoutes = require("./routes/songs");
const songRandom = require("./routes/song-random");
const songSearch = require("./routes/song-search");

// express app
const app = express();

// middleware
app.use("/musicfiles", express.static("../frontend/musicfiles"));
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/playlists/", playlistRoutes);
app.use("/api/songs/", songRoutes);
app.use("/api/search", songSearch);
app.use("/api/song", songRandom);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to mongodb & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
