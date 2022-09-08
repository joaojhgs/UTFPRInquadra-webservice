/*
  Warnings:

  - You are about to drop the column `Name` on the `Court` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Sport` table. All the data in the column will be lost.
  - You are about to drop the column `Campi` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `RA` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `HorarioIndisponivel` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Court` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Sport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campi` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ra` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HorarioIndisponivel" DROP CONSTRAINT "HorarioIndisponivel_courtId_fkey";

-- AlterTable
ALTER TABLE "Court" DROP COLUMN "Name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sport" DROP COLUMN "Name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Campi",
DROP COLUMN "Email",
DROP COLUMN "Name",
DROP COLUMN "RA",
ADD COLUMN     "campi" TEXT NOT NULL,
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "ra" INTEGER NOT NULL;

-- DropTable
DROP TABLE "HorarioIndisponivel";

-- CreateTable
CREATE TABLE "unavailableTime" (
    "id" UUID NOT NULL,
    "dayOfTheWeek" "DayOfTheWeek" NOT NULL,
    "startTime" DATE NOT NULL,
    "endTime" DATE NOT NULL,
    "singleOccurency" DATE NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "courtId" UUID NOT NULL,

    CONSTRAINT "unavailableTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "unavailableTime" ADD CONSTRAINT "unavailableTime_courtId_fkey" FOREIGN KEY ("courtId") REFERENCES "Court"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
