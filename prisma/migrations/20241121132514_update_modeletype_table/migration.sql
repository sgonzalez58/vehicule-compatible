/*
  Warnings:

  - You are about to drop the `_ModeleToType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_ModeleToType_B_index";

-- DropIndex
DROP INDEX "_ModeleToType_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ModeleToType";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ModeleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modeleId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    CONSTRAINT "ModeleType_modeleId_fkey" FOREIGN KEY ("modeleId") REFERENCES "Modele" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ModeleType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ModeleType" ("id", "modeleId", "typeId") SELECT "id", "modeleId", "typeId" FROM "ModeleType";
DROP TABLE "ModeleType";
ALTER TABLE "new_ModeleType" RENAME TO "ModeleType";
CREATE UNIQUE INDEX "ModeleType_modeleId_typeId_key" ON "ModeleType"("modeleId", "typeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
