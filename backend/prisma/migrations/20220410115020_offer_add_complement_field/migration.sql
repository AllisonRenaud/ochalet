/*
  Warnings:

  - You are about to drop the column `notes` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `price_ht` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `price_ttc` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `offers` table. All the data in the column will be lost.
  - Added the required column `complement` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "offers" DROP COLUMN "notes",
DROP COLUMN "price_ht",
DROP COLUMN "price_ttc",
DROP COLUMN "tax",
ADD COLUMN     "complement" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
