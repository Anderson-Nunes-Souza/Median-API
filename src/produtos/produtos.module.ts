import { Module } from '@nestjs/common';
import { ProdutoService } from './produtos.service';
import { ProdutoController } from './produtos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ComponenteService } from 'src/componente/componente.service';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
  imports: [PrismaModule],
})

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, ComponenteService],
})
export class ProdutoModule {}
