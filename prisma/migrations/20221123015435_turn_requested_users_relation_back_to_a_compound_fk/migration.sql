/*
  Warnings:

  - The primary key for the `reservation_has_requested_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `reservation_has_requested_users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reservation_has_requested_users" DROP CONSTRAINT "reservation_has_requested_users_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "reservation_has_requested_users_pkey" PRIMARY KEY ("reservation_id", "user_id");
