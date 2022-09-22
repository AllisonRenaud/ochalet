const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
        include: {
          location: true,
        },
      });
      response.status(200).json(offer);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  createOffer: async (request, response) => {
    try {
      const image_default = await cloudinary.uploader.upload(
        request.files.image_default.filepath
      );

      let images = [];
      for (let index = 0; index < 5; index++) {
        const newImage = await cloudinary.uploader.upload(
          request.files[`image_${index}`].filepath
        );

        images.push(newImage.url);
      }

      const media = {
        image_default: image_default.url,
        images: images,
      };

      const newOffer = await prisma.offer.create({
        data: {
          ...request.body,
          street_number: parseInt(request.body.street_number),
          zip_code: parseInt(request.body.zip_code),
          people_capacity: parseInt(request.body.people_capacity),
          rooms: parseInt(request.body.rooms),
          bathrooms: parseInt(request.body.bathrooms),
          tv: parseInt(request.body.tv),
          price: parseInt(request.body.price),
          locationId: parseInt(request.body.locationId),
          wifi: request.body.wifi === "true",
          pets: request.body.pets === "true",
          cleaning: request.body.cleaning === "true",
          breakfast: request.body.breakfast === "true",
          status: "inactive",
          userId: request.user.id,
          media: media,
        },
      });
      response.status(200).json(newOffer);
    } catch (error) {
      response.status(500).send(error);
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

      const image_default = await cloudinary.uploader.upload(
        request.files.image_default.filepath
      );

      let images = [];
      for (let index = 0; index < 5; index++) {
        const newImage = await cloudinary.uploader.upload(
          request.files[`image_${index}`].filepath
        );

        images.push(newImage.url);
      }

      const media = {
        image_default: image_default.url,
        images: images,
      };

      const offer = await prisma.offer.update({
        where: { id: offerId },
        data: {
          ...request.body,
          street_number: parseInt(request.body.street_number),
          zip_code: parseInt(request.body.zip_code),
          people_capacity: parseInt(request.body.people_capacity),
          rooms: parseInt(request.body.rooms),
          bathrooms: parseInt(request.body.bathrooms),
          tv: parseInt(request.body.tv),
          price: parseInt(request.body.price),
          locationId: parseInt(request.body.locationId),
          wifi: request.body.wifi === "true",
          pets: request.body.pets === "true",
          cleaning: request.body.cleaning === "true",
          breakfast: request.body.breakfast === "true",
          media: media,
        },
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
