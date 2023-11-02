import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}
  create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({ data: createProdutoDto });  }
  

  findAll() {
    return this.prisma.produto.findMany({ where: { id: 1 } });
    }

  findOne(id: number) {
    return this.prisma.produto.findUnique({ where: { id } });
    }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({

      where: { id },

      data: updateProdutoDto,

    });  }

  remove(id: number) {
    return this.prisma.produto.delete({ where: { id } });  }
}
