-- CreateTable
CREATE TABLE "Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "idShopify" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_name_key" ON "Page"("name");
