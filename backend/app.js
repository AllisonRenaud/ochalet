const express = require("express");
const app = express();

const locationRouter = require("./routes/locationRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(locationRouter);

module.exports = app;
