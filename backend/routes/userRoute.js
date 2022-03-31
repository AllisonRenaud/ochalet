const userController = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");

const userRouter = require("express").Router();

userRouter.route("/users/create-user").post(userController.createUser);
userRouter.route("/users/create-seller").post(userController.createSeller);

userRouter.get(
  "/users/profile/",
  [authMiddleware, rolesMiddleware(["seller", "client"])],
  userController.getUserProfile
);

userRouter.patch(
  "/users/profile/",
  [authMiddleware, rolesMiddleware(["seller", "client"])],
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
