import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateComponenteDto } from 'src/componente/dto/create-componente.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';


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
          codigo: codigoProduto
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
        where: {
            codigo: codigoProduto,
          },
        })
      return componentes; 
  }
   async obterComponentesPorDescricao(descricao: string) {
    const componentes = await this.prisma.componente.findMany({
       where: {
        Descricao: {
          startsWith: descricao,
          contains: descricao, // Você pode usar outras opções de consulta, como "startsWith" ou "endsWith".
        },
      },
    });
    
    return componentes;
  } 
  async criarComponente(codigoProduto: string, createComponenteDto: CreateComponenteDto) {
    return this.prisma.componente.create({ data: createComponenteDto });
  } 
}
