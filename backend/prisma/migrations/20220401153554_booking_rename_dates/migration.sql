/*
  Warnings:

  - You are about to drop the column `end` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `dateEnd` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateStart` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "end",
DROP COLUMN "start",
ADD COLUMN     "dateEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateStart" TIMESTAMP(3) NOT NULL;
