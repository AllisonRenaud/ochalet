const authController = require("../controllers/authController");
const authRouter = require("express").Router();

authRouter.route("/login/").post(authController.login);

module.exports = authRouter;
