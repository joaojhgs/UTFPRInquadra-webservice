/*
  Warnings:

  - The primary key for the `reservation_has_requested_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `reservation_has_requested_users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "reservation_has_requested_users" DROP CONSTRAINT "reservation_has_requested_users_pkey",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "reservation_has_requested_users_pkey" PRIMARY KEY ("id");
