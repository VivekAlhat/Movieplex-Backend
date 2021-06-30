require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const moviesRouter = require("./routes/movies");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/movies", moviesRouter);

app.disable('etag');

module.exports = app;
