const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const userController = {
  createUser: async (request, response) => {
    try {
      const email = request.body.email;
      const password = request.body.password;

      const userFound = await prisma.user.findUnique({
        where: { email: email },
      });

      if (userFound) {
        return response.status(403).send("User already registered");
      }

      const passwordHashed = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          ...request.body,
          password: passwordHashed,
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
