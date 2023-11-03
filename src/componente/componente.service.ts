import { Injectable } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { isNumberObject } from 'util/types';
import { NotFoundError } from 'rxjs';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { error } from 'console';

@Injectable()
export class ComponenteService {
  constructor(private prisma: PrismaService) {}

  async criarComponente(codigoProduto: string, createComponenteDto: CreateComponenteDto) {
    const produto = await this.prisma.produto.findUnique({
      where: {
        codigo: codigoProduto,
      },
    });

    if (!produto) {
      throw new ExceptionsHandler;
    }

/*     const componente = await this.prisma.componente.create({
      data: {
        id: {
          connect: {
            id: produto.id,
          },
        },
        ...createComponenteDto,
      },
    });

    return componente; */
  }
}
