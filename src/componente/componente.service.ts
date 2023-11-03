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
    return this.prisma.componente.create({
      data: createComponenteDto,
    });
  }
  

  findAll() {
    return this.prisma.componente.findMany();
  }

  findOne(id: number) {
    return this.prisma.componente.findUnique({ where: { id } });
  }

  update(id: number, updateComponenteDto: UpdateComponenteDto) {
    return this.prisma.componente.update({

      where: { id },
      data: updateComponenteDto,

    });  }

  remove(id: number) {
    return this.prisma.componente.delete({ where: { id } });  }
}
