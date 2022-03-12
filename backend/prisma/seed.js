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

  const location = await prisma.location.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Location 1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Alpen_01.JPG/1280px-Alpen_01.JPG",
      status: "active",
    },
  });

  const offer = await prisma.offer.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Offer 1",
      description: "Description",
      zip_code: 13100,
      city_name: "Paris",
      country: "France",
      street_name: "Rue de mexique",
      street_number: 23,
      price_ht: 1000,
      tax: 20,
      price_ttc: 1200,
      images: {},
      status: "inactive",
      people_capacity: 12,
      rooms: 6,
      bathrooms: 3,
      pets: true,
      tv: 3,
      wifi: true,
      cleaning: true,
      breakfast: false,
      notes: "RAS",
      location: {
        connect: { id: 1 },
      },
      user: {
        connect: { id: 5 },
      },
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
