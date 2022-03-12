const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const offerController = {
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
};

module.exports = offerController;
