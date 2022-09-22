/*
  Warnings:

  - You are about to drop the column `birth_date` on the `users` table. All the data in the column will be lost.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "birth_date",
ADD COLUMN     "role" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "offers" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "city_name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "street_name" TEXT NOT NULL,
    "street_number" INTEGER NOT NULL,
    "price_ht" INTEGER NOT NULL,
    "tax" INTEGER NOT NULL,
    "price_ttc" INTEGER NOT NULL,
    "images" JSONB NOT NULL,
    "status" TEXT NOT NULL,
    "people_capacity" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "pets" INTEGER NOT NULL,
    "tv" INTEGER NOT NULL,
    "wifi" BOOLEAN NOT NULL,
    "cleaning" BOOLEAN NOT NULL,
    "breakfast" BOOLEAN NOT NULL,
    "notes" TEXT NOT NULL,
    "userId" INTEGER,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER,
    "offerId" INTEGER,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
