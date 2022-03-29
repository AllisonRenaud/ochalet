const offerController = require("../controllers/offerController");
const authMiddleware = require("../middlewares/authMiddleware");

const offerRouter = require("express").Router();

offerRouter.route("/offers/").get(offerController.findAll);
offerRouter.route("/offers/detail/:offerId/").get(offerController.findById);
offerRouter.post(offerController.create);

offerRouter.get(
  "/offers/my-offers/",
  authMiddleware,
  offerController.getSellerOffers
);

module.exports = offerRouter;
