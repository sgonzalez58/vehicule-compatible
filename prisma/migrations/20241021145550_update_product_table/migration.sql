/*
  Warnings:

  - You are about to drop the column `url` on the `Page` table. All the data in the column will be lost.
  - Added the required column `productUrl` to the `Produit` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "idShopify" TEXT NOT NULL
);
INSERT INTO "new_Page" ("id", "idShopify", "name") SELECT "id", "idShopify", "name" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_name_key" ON "Page"("name");
CREATE TABLE "new_Produit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productUrl" TEXT NOT NULL
);
INSERT INTO "new_Produit" ("id", "productId", "productImage", "productName") SELECT "id", "productId", "productImage", "productName" FROM "Produit";
DROP TABLE "Produit";
ALTER TABLE "new_Produit" RENAME TO "Produit";
CREATE UNIQUE INDEX "Produit_productId_key" ON "Produit"("productId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
