// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.produto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      codigo: 'codigo1',
      nome: 'produto teste 1',
    },
  });

  //   const post2 = await prisma.produto.upsert({
  //     where: { id: 1 },
  //     update: {},
  //     create: {
  //         id: 1,
  //         codigo: 'codigo1',
  //         nome: 'produto teste 1'
  //     },
  //   });

  const post2 = await prisma.componente.upsert({
    /* 
    model Componente {
        id         Int    @id @default(autoincrement())
        codigo     Int    @unique
        indice     Int
        SKU        String?
        Descricao  String?
        Preco      Float
        Quantidade Int
      } */

    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      codigo: 1,
      indice: 1,
      Preco: 1.99,
      Quantidade: 1,
    },
  });

  //   const post4 = await prisma.componente.upsert({
  //     where: { title: "What's new in Prisma? (Q1/22)" },
  //     update: {},
  //     create: {
  //       title: "What's new in Prisma? (Q1/22)",
  //       body: 'Our engineers have been working hard, issuing new releases with many improvements...',
  //       description:
  //         'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
  //       published: true,
  //     },
  //   });

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
