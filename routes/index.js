const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name: name });
  } else {
    res.redirect("/hello");
  }
});

router.get("/cards", (req, res) => {
  res.render("card");
});

router.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
  //res.render("hello");
});

router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");

  res.redirect("/hello");
});

router.get("/about", (req, res) => {
  res.send(`<h1>Our services are one of the best </h1>`);
});

router.get("/api", (req, res) => {
  res.json({ name: "Thanks" });
});

//router.use((err, req, res, next) => {
// res.locals.error = err;
//res.render("error");
//});

module.exports = router;
