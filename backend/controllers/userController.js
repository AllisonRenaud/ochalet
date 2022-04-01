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
          role: "client",
        },
      });

      delete user.password;
      response.status(200).json(user);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  createSeller: async (request, response) => {
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
          role: "seller",
        },
      });
      delete user.password;
      response.status(200).json(user);
    } catch (error) {
      response.status(500).send(error.message);
    }
  },
  getUserProfile: async (request, response) => {
    try {
      const userId = request.user.id;
      const user = await prisma.user.findUnique({ where: { id: userId } });
      delete user.password;

      response.status(200).json(user);
    } catch (error) {
      response.status(401).json({ error: error });
    }
  },
  updateUserProfile: async (request, response) => {
    try {
      const userId = request.user.id;
      const newUser = request.body;
      const user = await prisma.user.update({
        data: newUser,
        where: { id: userId },
      });
      delete user.password;
      response.status(200).json(user);
    } catch (error) {
      response.status(401).json({ error: error });
    }
  },
  getUsers: async (request, response) => {
    try {
      const users = await prisma.user.findMany();

      const updatedUsers = users.map((user) => {
        const userWithoutPassword = user;
        delete userWithoutPassword.password;
        return userWithoutPassword;
      });

      response.status(200).json(updatedUsers);
    } catch (error) {
      response.status(401).json({ error: error });
    }
  },
  deleteUser: async (request, response) => {
    try {
      const userId = parseInt(request.params.userId);
      const deleteUser = await prisma.user.delete({ where: { id: userId } });
      response.status(200).json({ message: "User successfully deleted" });
    } catch (error) {
      response.status(401).json({ error: error });
    }
  },
};

module.exports = userController;
