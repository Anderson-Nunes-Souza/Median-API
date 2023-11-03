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

    async obterComponentesPorCodigo(codigoProduto: string) {
       const componentes = await this.prisma.componente.findMany({
/*         where: {
          produto: {
            codigo: codigoProduto,
          },
        },
      });
      return componentes; */
    }); 
      return 'teste'
  }
  async obterComponentesPorDescricao(descricao: string) {
    const componentes = await this.prisma.componente.findMany({
     /*  where: {
        descricao: {
          contains: descricao, // Você pode usar outras opções de consulta, como "startsWith" ou "endsWith".
        },
      }, */
    });
    return 'ENDPOINT GET /api/v1/produto/componente?descricao={descricao}'
    //return componentes;
  }


}
