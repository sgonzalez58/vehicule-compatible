-- CreateTable
CREATE TABLE "Marque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Modele" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "marqueId" INTEGER NOT NULL,
    CONSTRAINT "Modele_marqueId_fkey" FOREIGN KEY ("marqueId") REFERENCES "Marque" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ModeleToProduit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ModeleToProduit_A_fkey" FOREIGN KEY ("A") REFERENCES "Modele" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ModeleToProduit_B_fkey" FOREIGN KEY ("B") REFERENCES "Produit" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Marque_name_key" ON "Marque"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Modele_name_key" ON "Modele"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Produit_productId_key" ON "Produit"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "_ModeleToProduit_AB_unique" ON "_ModeleToProduit"("A", "B");

-- CreateIndex
CREATE INDEX "_ModeleToProduit_B_index" ON "_ModeleToProduit"("B");
