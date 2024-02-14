const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Set the first exercise under "/0" URL in case other exercises are added in the future
app.use("/0", router);

module.exports = app;
