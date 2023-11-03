// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.produto.upsert({
    where: { id: 1},
    update: {},
    create: {
      id: 1,
      codigo: 'codigo1',
      nome: 'produto teste 1',
    },
  });

  const post2 = await prisma.componente.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      codigo: 1,
      indice: 1,
      Preco: 1.99,
      Quantidade: 1,
      produtoId: 1
    },
  });
  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
