const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Routed Exercise Four"));

module.exports = router;