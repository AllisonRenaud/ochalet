const offerController = require("../controllers/offerController");

const offerRouter = require("express").Router();

offerRouter.route("/offers/:offerId").get(offerController.findById);
offerRouter.route("/offers/create").post(offerController.create);

module.exports = offerRouter;
