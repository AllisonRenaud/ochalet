const userController = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");

const userRouter = require("express").Router();

userRouter.route("/users/create-user").post(userController.createUser);

userRouter.get(
  "/users/profile/",
  [authMiddleware],
  userController.getUserProfile
);

userRouter.patch(
  "/users/profile/",
  [authMiddleware, rolesMiddleware(["seller", "client", "admin"])],
  userController.updateUserProfile
);

userRouter.get(
  "/users/",
  [authMiddleware, rolesMiddleware(["admin"])],
  userController.getUsers
);

userRouter.delete(
  "/users/:userId/",
  [authMiddleware, rolesMiddleware(["admin"])],
  userController.deleteUser
);

module.exports = userRouter;
