const express = require("express");
const session = require("express-session");
const db = require("./database");

const router = express.Router();

router.use(
  session({
    secret: "sessionsecret",
    saveUninitialized: true,
    resave: false
  })
);

const authMiddleware = (req, res, next) => {
  if (req.session && req.session.auth) return next();
  else return res.sendStatus(401);
};

router.get("/", (req, res) => {
  const { auth } = req.session;

  if (auth) {
    res.redirect("./profile");
  } else {
    res.redirect("./login");
  }
});

router.get("/login", (req, res) => {
  const { auth } = req.session;

  if (auth) {
    res.redirect("./profile");
  } else {
    res.render("pages/login", {
      failedAuth: false
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(`SELECT * FROM User WHERE username = "${username}" AND password = "${password}"`, (err, row) => {
    if (err) console.error(`[-] ${err.message}`);

    if (row) {
      req.session.auth = username;
      res.redirect("./profile");
    } else {
      res.render("pages/login", {
        failedAuth: true,
        username,
        password
      });
    }
  });
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("./");
});

router.get("/profile", authMiddleware, (req, res) => {
  res.render("pages/profile");
});

module.exports = router;
