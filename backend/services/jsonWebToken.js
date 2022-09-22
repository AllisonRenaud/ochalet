const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const jsonWebTokenService = {
  generateAccessToken: (userId) => {
    return jwt.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: "7d" });
  },
};

module.exports = jsonWebTokenService;
