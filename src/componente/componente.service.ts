import { Injectable } from '@nestjs/common';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { isNumberObject } from 'util/types';

@Injectable()
export class ComponenteService {
  constructor(private prisma: PrismaService) {}
  create(createComponenteDto: CreateComponenteDto) {
  return this.prisma.produto.create({ data: createComponenteDto });  }

  findAll() {
    return this.prisma.componente.findMany({ where: { id: 1 } });
  }

  findOne(id: number) {
    return this.prisma.componente.findUnique({ where: { id } });
  }

  update(id: number, updateComponenteDto: UpdateComponenteDto) {
    return this.prisma.componente.update({

      where: { id },

      data: UpdateComponenteDto,

    });  }

  remove(id: number) {
    return this.prisma.componente.delete({ where: { id } });  }
}
