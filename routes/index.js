const express = require("express");
const router = express.Router();

/* GET home route. */
router.get("/", function (req, res, next) {
  res.json({ response: "Welcome to the Moviplex backend client." });
});

module.exports = router;
