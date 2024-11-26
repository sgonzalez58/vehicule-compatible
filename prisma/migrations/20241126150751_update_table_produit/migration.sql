-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productUrl" TEXT NOT NULL,
    "productPrice" DECIMAL NOT NULL DEFAULT 0,
    "infosComplementaires" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Produit" ("id", "productId", "productImage", "productName", "productPrice", "productUrl") SELECT "id", "productId", "productImage", "productName", "productPrice", "productUrl" FROM "Produit";
DROP TABLE "Produit";
ALTER TABLE "new_Produit" RENAME TO "Produit";
CREATE UNIQUE INDEX "Produit_productId_key" ON "Produit"("productId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
