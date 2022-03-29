const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const offerController = {
  findAll: async (request, response) => {
    try {
      const offers = await prisma.offer.findMany();
      response.status(200).json(offers);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  findById: async (request, response) => {
    try {
      const offer = await prisma.offer.findUnique({
        where: { id: parseInt(request.params.offerId) },
      });
      response.status(200).json(offer);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  create: async (request, response) => {
    try {
      // TODO: search user with token:  const user = await prisma.user.findUnique();
      const newOffer = await prisma.offer.create({
        data: {
          ...request.body,
          status: "inactive",
        },
      });
      response.status(200).json(newOffer);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  getSellerOffers: async (request, response) => {
    try {
      const userRequest = request.user;

      if (userRequest.role === "seller") {
        const user = await prisma.user.findUnique({
          where: { id: userRequest.id },
          include: { offers: true },
        });
        return response.status(200).json(user.offers);
      }

      return response.status(401).send("Access denied");
    } catch (error) {
      return response.status(500).send(error.message);
    }
  },
};

module.exports = offerController;
