const express = require("express");

const controller = require("./controller");

const router = express.Router();

router.get("/players", controller.getPlayers);

router.get("/player-gamelog/:id", controller.getPlayerGamelog);

router.get("/player-profile/:id", controller.getPlayerProfile);

module.exports = router;
