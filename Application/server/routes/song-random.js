const express = require("express");
const { getRandomSong } = require("../controllers/songController-random");

const router = express.Router();

// GET a random song
router.get("/", getRandomSong);

module.exports = router;
