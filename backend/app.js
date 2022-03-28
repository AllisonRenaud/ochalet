const express = require("express");
const app = express();

const authRouter = require("./routes/authRoute");
const locationRouter = require("./routes/locationRoute");
const offerRouter = require("./routes/offerRoute");
const userRouter = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);
app.use(userRouter);
app.use(locationRouter);
app.use(offerRouter);

module.exports = app;
