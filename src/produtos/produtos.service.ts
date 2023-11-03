import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}
  create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({ data: createProdutoDto });  }
  

    findOne(codigo: string) {
      return this.prisma.produto.findUnique({ where: { codigo}  });
      }
      
  findAll() {
    return this.prisma.produto.findMany();
    }

    async obterComponentePorCodigoEIndice(codigoProduto: string, indice: number) {
      const componente = await this.prisma.componente.findFirst({
        where: {
          codigo: parseInt(codigoProduto) 
          },
          //indice,
        },
      );
  
      if (!componente) {
        //throw new NotFoundException();
      }
  
      return componente;
    }



/*   update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({

      where: { id },

      data: updateProdutoDto,

    });  }

  remove(id: number) {
    return this.prisma.produto.delete({ where: { id } });  } */
}
