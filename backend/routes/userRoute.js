const userController = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.route("/users/create-user").post(userController.createUser);
userRouter.route("/users/create-seller").post(userController.createSeller);

module.exports = userRouter;
