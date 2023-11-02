import { Module } from '@nestjs/common';
import { ComponenteService } from './componente.service';
import { ComponenteController } from './componente.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ComponenteController],
  providers: [ComponenteService],
  imports: [PrismaModule],
})
export class ComponenteModule {}
