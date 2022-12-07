/*
  Warnings:

  - You are about to drop the column `dayOfTheWeek` on the `unavailableTime` table. All the data in the column will be lost.
  - You are about to drop the column `singleOccurency` on the `unavailableTime` table. All the data in the column will be lost.
  - Added the required column `endDateTime` to the `unavailableTime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDateTime` to the `unavailableTime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "unavailableTime" DROP COLUMN "dayOfTheWeek",
DROP COLUMN "singleOccurency",
ADD COLUMN     "endDateTime" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "startDateTime" TIMESTAMPTZ(6) NOT NULL,
ALTER COLUMN "startTime" SET DATA TYPE TIMETZ(6),
ALTER COLUMN "endTime" SET DATA TYPE TIMETZ(3);

-- CreateTable
CREATE TABLE "dayOfTheWeek" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "dayOfTheWeek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unavailableTime_has_dayOfTheWeek" (
    "unavailableTimeId" UUID NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "dayOfTheWeekId" UUID NOT NULL,

    CONSTRAINT "unavailableTime_has_dayOfTheWeek_pkey" PRIMARY KEY ("unavailableTimeId","dayOfTheWeekId")
);

-- CreateIndex
CREATE UNIQUE INDEX "unavailableTime_has_dayOfTheWeek_unavailableTimeId_key" ON "unavailableTime_has_dayOfTheWeek"("unavailableTimeId");

-- AddForeignKey
ALTER TABLE "unavailableTime_has_dayOfTheWeek" ADD CONSTRAINT "unavailableTime_has_dayOfTheWeek_unavailableTimeId_fkey" FOREIGN KEY ("unavailableTimeId") REFERENCES "unavailableTime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unavailableTime_has_dayOfTheWeek" ADD CONSTRAINT "unavailableTime_has_dayOfTheWeek_dayOfTheWeekId_fkey" FOREIGN KEY ("dayOfTheWeekId") REFERENCES "dayOfTheWeek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
