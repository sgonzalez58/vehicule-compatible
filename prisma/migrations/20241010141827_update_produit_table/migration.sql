/*
  Warnings:

  - Added the required column `productImage` to the `Produit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Produit` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productImage" TEXT NOT NULL
);
INSERT INTO "new_Produit" ("id", "productId") SELECT "id", "productId" FROM "Produit";
DROP TABLE "Produit";
ALTER TABLE "new_Produit" RENAME TO "Produit";
CREATE UNIQUE INDEX "Produit_productId_key" ON "Produit"("productId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
