-- AlterTable
ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "zip_code" DROP NOT NULL,
ALTER COLUMN "city_name" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "street_name" DROP NOT NULL,
ALTER COLUMN "street_number" DROP NOT NULL;