/*
  Warnings:

  - Added the required column `familleId` to the `Modele` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Famille" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FamilleToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FamilleToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Famille" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FamilleToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ModeleToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ModeleToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Modele" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ModeleToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Modele" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "marqueId" INTEGER NOT NULL,
    "familleId" INTEGER NOT NULL,
    CONSTRAINT "Modele_marqueId_fkey" FOREIGN KEY ("marqueId") REFERENCES "Marque" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Modele_familleId_fkey" FOREIGN KEY ("familleId") REFERENCES "Famille" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Modele" ("id", "marqueId", "name") SELECT "id", "marqueId", "name" FROM "Modele";
DROP TABLE "Modele";
ALTER TABLE "new_Modele" RENAME TO "Modele";
CREATE UNIQUE INDEX "Modele_name_marqueId_key" ON "Modele"("name", "marqueId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Famille_name_key" ON "Famille"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_FamilleToType_AB_unique" ON "_FamilleToType"("A", "B");

-- CreateIndex
CREATE INDEX "_FamilleToType_B_index" ON "_FamilleToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModeleToType_AB_unique" ON "_ModeleToType"("A", "B");

-- CreateIndex
CREATE INDEX "_ModeleToType_B_index" ON "_ModeleToType"("B");
