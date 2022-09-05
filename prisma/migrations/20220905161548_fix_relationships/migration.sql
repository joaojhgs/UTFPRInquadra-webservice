/*
  Warnings:

  - You are about to drop the column `sportsId` on the `Court` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Court_sportsId_key";

-- AlterTable
ALTER TABLE "Court" DROP COLUMN "sportsId";
