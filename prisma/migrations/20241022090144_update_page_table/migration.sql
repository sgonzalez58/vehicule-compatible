/*
  Warnings:

  - Added the required column `url` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "idShopify" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_Page" ("id", "idShopify", "name") SELECT "id", "idShopify", "name" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_name_key" ON "Page"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
