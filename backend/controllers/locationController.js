const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const locationController = {
  findAll: async (request, response) => {
    try {
      const locations = await prisma.location.findMany({
        orderBy: { name: "asc" },
      });
      response.status(200).json(locations);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  findById: async (request, response) => {
    try {
      const location = await prisma.location.findUnique({
        where: { id: parseInt(request.params.locationId) },
        include: {
          offers: true,
        },
      });
      response.status(200).json(location);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
};

module.exports = locationController;
