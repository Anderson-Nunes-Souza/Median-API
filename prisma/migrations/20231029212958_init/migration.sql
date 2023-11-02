-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Componente" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "indice" INTEGER NOT NULL,
    "SKU" TEXT,
    "Descricao" TEXT,
    "Preco" DOUBLE PRECISION NOT NULL,
    "Quantidade" INTEGER NOT NULL,

    CONSTRAINT "Componente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_codigo_key" ON "Produto"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Componente_codigo_key" ON "Componente"("codigo");
