const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bookingController = {
  getMyBookings: async (request, response) => {
    try {
      const userId = request.user.id;
      const bookings = await prisma.booking.findMany({
        where: { userId: userId },
      });
      response.status(200).json(bookings);
    } catch (error) {
      response.status(401).json({ error: error });
    }
  },
  createBooking: async (request, response) => {
    try {
      const offerId = parseInt(request.params.offerId);
      const dateStart = request.body.dateStart;
      const dateEnd = request.body.dateEnd;
      const sellerId = request.body.sellerId;
      const newBooking = await prisma.booking.create({
        data: {
          status: "inactive",
          userId: request.user.id,
          offerId: offerId,
          dateStart: dateStart,
          dateEnd: dateEnd,
          sellerId: sellerId,
        },
      });
      response.status(200).json(newBooking);
    } catch (error) {
      console.log(error);
      response.status(401).json({ error: error });
    }
  },
  acceptBooking: async (request, response) => {
    try {
      const bookingId = parseInt(request.params.bookingId);
      const sellerId = request.user.id;
      const validateBooking = request.body;

      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
      });

      if (booking.sellerId === sellerId) {
        const bookingUpdated = await prisma.booking.update({
          where: { id: bookingId },
          data: validateBooking,
        });
        response.status(200).json(bookingUpdated);
      } else {
        response
          .status(401)
          .json({ error: "Sorry, you can't update this offer" });
      }
    } catch (error) {
      response.status(401).json({ error: error });
    }
  },
  getBookingsToValidate: async (request, response) => {
    try {
      const sellerId = request.user.id;
      const bookingsToValidate = await prisma.booking.findMany({
        where: { sellerId: sellerId },
      });
      response.status(200).json(bookingsToValidate);
    } catch (error) {
      response.status(401).json({ error: error });
    }
  },
};

module.exports = bookingController;
