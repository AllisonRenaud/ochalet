const { PrismaClient } = require("@prisma/client");
const { response } = require("express");
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
  createOffer: async (request, response) => {
    try {
      const newOffer = await prisma.offer.create({
        data: {
          ...request.body,
          status: "inactive",
          userId: request.user.id,
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
  updateOffer: async (request, response) => {
    try {
      const offerId = parseInt(request.params.offerId);
      const newOffer = request.body;
      const offer = await prisma.offer.update({
        where: { id: offerId },
        data: newOffer,
      });

      response.status(200).json(offer);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },

  deleteOffer: async (request, response) => {
    try {
      const offerId = parseInt(request.params.offerId);
      const user = request.user;

      const offer = await prisma.offer.findUnique({
        where: { id: offerId },
      });

      if (offer.userId === user.id || user.role === "admin") {
        const offerDeleted = await prisma.offer.delete({
          where: { id: offerId },
        });
        response.status(200).json({ success: "Offer deleted successfully" });
      } else {
        response.status(401).json({ error: "Access denied" });
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
};

module.exports = offerController;
