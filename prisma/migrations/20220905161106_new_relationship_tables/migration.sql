/*
  Warnings:

  - You are about to drop the `Courts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sports` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "DayOfTheWeek" AS ENUM ('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');

-- DropForeignKey
ALTER TABLE "Courts" DROP CONSTRAINT "Courts_sportsId_fkey";

-- DropTable
DROP TABLE "Courts";

-- DropTable
DROP TABLE "Sports";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "RA" INTEGER NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "Campi" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sport" (
    "id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "maxAmount" TEXT,

    CONSTRAINT "Sport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Court" (
    "id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "sportsId" UUID NOT NULL,

    CONSTRAINT "Court_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" UUID NOT NULL,
    "date" DATE,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "manager_id" UUID NOT NULL,
    "max_participants" INTEGER NOT NULL,
    "sportId" UUID NOT NULL,
    "courtId" UUID NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorarioIndisponivel" (
    "id" UUID NOT NULL,
    "dayOfTheWeek" "DayOfTheWeek" NOT NULL,
    "startTime" DATE NOT NULL,
    "endTime" DATE NOT NULL,
    "singleOccurency" DATE NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "courtId" UUID NOT NULL,

    CONSTRAINT "HorarioIndisponivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "court_has_sports" (
    "court_id" UUID NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE,
    "sportsId" UUID,

    CONSTRAINT "court_has_sports_pkey" PRIMARY KEY ("court_id")
);

-- CreateTable
CREATE TABLE "reservation_has_users" (
    "reservation_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservation_has_users_pkey" PRIMARY KEY ("reservation_id","user_id")
);

-- CreateTable
CREATE TABLE "reservation_has_requested_users" (
    "reservation_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservation_has_requested_users_pkey" PRIMARY KEY ("reservation_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Court_sportsId_key" ON "Court"("sportsId");

-- CreateIndex
CREATE UNIQUE INDEX "court_has_sports_court_id_key" ON "court_has_sports"("court_id");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_courtId_fkey" FOREIGN KEY ("courtId") REFERENCES "Court"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorarioIndisponivel" ADD CONSTRAINT "HorarioIndisponivel_courtId_fkey" FOREIGN KEY ("courtId") REFERENCES "Court"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "court_has_sports" ADD CONSTRAINT "court_has_sports_court_id_fkey" FOREIGN KEY ("court_id") REFERENCES "Court"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "court_has_sports" ADD CONSTRAINT "court_has_sports_sportsId_fkey" FOREIGN KEY ("sportsId") REFERENCES "Sport"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_has_users" ADD CONSTRAINT "reservation_has_users_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_has_users" ADD CONSTRAINT "reservation_has_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_has_requested_users" ADD CONSTRAINT "reservation_has_requested_users_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation_has_requested_users" ADD CONSTRAINT "reservation_has_requested_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
