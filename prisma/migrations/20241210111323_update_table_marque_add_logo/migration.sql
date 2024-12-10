-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Marque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "logo" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL
);
INSERT INTO "new_Marque" ("id", "name") SELECT "id", "name" FROM "Marque";
DROP TABLE "Marque";
ALTER TABLE "new_Marque" RENAME TO "Marque";
CREATE UNIQUE INDEX "Marque_name_key" ON "Marque"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
