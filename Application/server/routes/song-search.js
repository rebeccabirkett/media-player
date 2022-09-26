const express = require("express");
const { searchSong } = require("../controllers/songController-search");

const router = express.Router();

// GET search
router.get("/search", searchSong);

module.exports = router;
