const express = require("express");

const controller = require("./controller");

const router = express.Router();

router.get("/players", controller.getPlayers);

router.get("/player-gamelog/:id", controller.getPlayerGamelog);

module.exports = router;
