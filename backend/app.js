const express = require("express");
const app = express();

const locationRouter = require("./routes/locationRoute");
const offerRouter = require("./routes/offerRoute");
const userRouter = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(locationRouter);
app.use(offerRouter);

module.exports = app;
