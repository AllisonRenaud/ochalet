const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@mail.com" },
    update: {},
    create: {
      email: "admin@mail.com",
      first_name: "Admin",
      last_name: "Toto",
      role: "admin",
      phone: "0123456789",
      zip_code: 13100,
      city_name: "Aix en provence",
      country: "France",
      street_name: "Rue de la paix",
      street_number: 23,
      password: "123456",
    },
  });

  const user = await prisma.user.upsert({
    where: { email: "user@mail.com" },
    update: {},
    create: {
      email: "user@mail.com",
      first_name: "User",
      last_name: "Toto",
      role: "user",
      phone: "0123456789",
      zip_code: 13100,
      city_name: "Aix en provence",
      country: "France",
      street_name: "Rue de la paix",
      street_number: 23,
      password: "123456",
    },
  });

  const location1 = await prisma.location.upsert({
    where: { id: 1 },
    update: {
      name: "Alpes du Nord",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/alpes-du-nord_rypbbo.jpg",
      status: "active",
    },
    create: {
      name: "Alpes du Nord",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/alpes-du-nord_rypbbo.jpg",
      status: "active",
    },
  });

  const location2 = await prisma.location.upsert({
    where: { id: 2 },
    update: {
      name: "Alpes du Sud",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/alpes-du-sud_vhi04j.jpg",
      status: "active",
    },
    create: {
      name: "Alpes du Sud",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/alpes-du-sud_vhi04j.jpg",
      status: "active",
    },
  });

  const location3 = await prisma.location.upsert({
    where: { id: 3 },
    update: {
      name: "Jura",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/jura_dnzgip.jpg",
      status: "active",
    },
    create: {
      name: "Jura",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/jura_dnzgip.jpg",
      status: "active",
    },
  });

  const location4 = await prisma.location.upsert({
    where: { id: 4 },
    update: {
      name: "Massif Central",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/massif-central_gjzs7y.jpg",
      status: "active",
    },
    create: {
      name: "Massif Central",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/massif-central_gjzs7y.jpg",
      status: "active",
    },
  });

  const location5 = await prisma.location.upsert({
    where: { id: 5 },
    update: {
      name: "Pyrénées",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/pyrenees_iiik20.jpg",
      status: "active",
    },
    create: {
      name: "Pyrénées",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/pyrenees_iiik20.jpg",
      status: "active",
    },
  });

  const location6 = await prisma.location.upsert({
    where: { id: 6 },
    update: {
      name: "Vosges",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/vosges_y9mh12.jpg",
      status: "active",
    },
    create: {
      name: "Vosges",
      image:
        "https://res.cloudinary.com/dbbz6f1kg/image/upload/c_scale,w_360/v1649668290/vosges_y9mh12.jpg",
      status: "active",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
