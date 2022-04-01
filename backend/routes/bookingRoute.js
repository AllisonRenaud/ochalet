const bookingRouter = require("express").Router();
const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");

bookingRouter.get(
  "/bookings/my-bookings/",
  [authMiddleware, rolesMiddleware(["client"])],
  bookingController.getMyBookings
);
bookingRouter.post(
  "/bookings/offer/:offerId/",
  [authMiddleware, rolesMiddleware(["client"])],
  bookingController.createBooking
);
bookingRouter.patch(
  "/bookings/:bookingId/",
  [authMiddleware, rolesMiddleware(["seller"])],
  bookingController.acceptBooking
);
bookingRouter.get(
  "/bookings/validate/",
  [authMiddleware, rolesMiddleware(["seller"])],
  bookingController.getBookingsToValidate
);

module.exports = bookingRouter;
