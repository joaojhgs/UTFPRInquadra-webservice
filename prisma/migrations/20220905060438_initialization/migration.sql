-- CreateTable
CREATE TABLE "Users" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "RA" INTEGER NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "Campi" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Sports" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "maxAmount" TEXT,

    CONSTRAINT "Sports_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Courts" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "sportsId" INTEGER NOT NULL,

    CONSTRAINT "Courts_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_Id_key" ON "Users"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Sports_Id_key" ON "Sports"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Courts_Id_key" ON "Courts"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Courts_sportsId_key" ON "Courts"("sportsId");

-- AddForeignKey
ALTER TABLE "Courts" ADD CONSTRAINT "Courts_sportsId_fkey" FOREIGN KEY ("sportsId") REFERENCES "Sports"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
