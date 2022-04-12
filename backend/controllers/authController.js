const { PrismaClient } = require("@prisma/client");
const { generateAccessToken } = require("../services/jsonWebToken");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const authController = {
  login: async (request, response) => {
    const email = request.body.email;
    const password = request.body.password;
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      return response
        .status(403)
        .send({
          message: "Votre email et/ou votre mot de passe sont incorrectes",
        });
    } else {
      const verifyPassword = await bcrypt.compare(password, user.password);

      if (!verifyPassword) {
        return response.status(404).send("Auth error");
      }

      const accessToken = generateAccessToken(user.id);
      response.status(200).json({ accessToken });
    }
  },
};

module.exports = authController;
