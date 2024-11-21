/*
  Warnings:

  - You are about to drop the `_ModeleToProduit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ModeleToProduit";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ModeleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modeleId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ModeleTypeToProduit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ModeleTypeToProduit_A_fkey" FOREIGN KEY ("A") REFERENCES "ModeleType" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ModeleTypeToProduit_B_fkey" FOREIGN KEY ("B") REFERENCES "Produit" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ModeleType_modeleId_typeId_key" ON "ModeleType"("modeleId", "typeId");

-- CreateIndex
CREATE UNIQUE INDEX "_ModeleTypeToProduit_AB_unique" ON "_ModeleTypeToProduit"("A", "B");

-- CreateIndex
CREATE INDEX "_ModeleTypeToProduit_B_index" ON "_ModeleTypeToProduit"("B");
