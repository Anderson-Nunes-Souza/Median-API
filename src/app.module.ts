import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ComponenteModule } from './componente/componente.module';

@Module({
  imports: [PrismaModule, ProdutosModule, ComponenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
