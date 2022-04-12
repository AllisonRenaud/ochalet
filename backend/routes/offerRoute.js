const offerController = require("../controllers/offerController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const uploadFilesMiddleware = require("../middlewares/uploadFilesMiddleware");

const offerRouter = require("express").Router();

offerRouter.route("/offers/").get(offerController.findAll);
offerRouter.route("/offers/detail/:offerId/").get(offerController.findById);

offerRouter.get(
  "/offers/my-offers/",
  authMiddleware,
  offerController.getSellerOffers
);

offerRouter.post(
  "/offers/",
  authMiddleware,
  rolesMiddleware(["seller"]),
  uploadFilesMiddleware,
  offerController.createOffer
);

offerRouter.patch(
  "/offers/:offerId/",
  [authMiddleware, rolesMiddleware(["seller"])],
  offerController.updateOffer
);

offerRouter.delete(
  "/offers/:offerId/",
  [authMiddleware, rolesMiddleware(["seller", "admin"])],
  offerController.deleteOffer
);

module.exports = offerRouter;
