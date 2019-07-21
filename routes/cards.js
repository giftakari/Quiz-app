const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("card", { prompt: "Who are you to check my routes" });
});

module.exports = router;
