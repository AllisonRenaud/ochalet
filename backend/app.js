const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const authRouter = require("./routes/authRoute");
const locationRouter = require("./routes/locationRoute");
const offerRouter = require("./routes/offerRoute");
const userRouter = require("./routes/userRoute");
const bookingRouter = require("./routes/bookingRoute");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(authRouter);
app.use(userRouter);
app.use(locationRouter);
app.use(offerRouter);
app.use(bookingRouter);

module.exports = app;
