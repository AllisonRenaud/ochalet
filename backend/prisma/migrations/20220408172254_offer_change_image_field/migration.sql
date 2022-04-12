/*
  Warnings:

  - You are about to drop the column `images` on the `offers` table. All the data in the column will be lost.
  - Added the required column `media` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "offers" DROP COLUMN "images",
ADD COLUMN     "media" JSONB NOT NULL;
