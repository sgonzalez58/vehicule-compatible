/*
  Warnings:

  - A unique constraint covering the columns `[name,marqueId]` on the table `Modele` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Modele_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Modele_name_marqueId_key" ON "Modele"("name", "marqueId");
