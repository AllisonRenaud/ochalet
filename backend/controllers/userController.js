const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const userController = {
  createUser: async (request, response) => {
    try {
      const user = await prisma.user.create({
        data: {
          ...request.body,
          role: "user",
        },
      });
      response.status(200).json(user);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  createSeller: async (request, response) => {
    try {
      const user = await prisma.user.create({
        data: {
          ...request.body,
          role: "seller",
        },
      });
      response.status(200).json(user);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
};

module.exports = userController;
