const locationController = require("../controllers/locationController");
const locationRouter = require("express").Router();

locationRouter.route("/locations/").get(locationController.findAll);
locationRouter
  .route("/locations/:locationId/")
  .get(locationController.findById);

module.exports = locationRouter;
