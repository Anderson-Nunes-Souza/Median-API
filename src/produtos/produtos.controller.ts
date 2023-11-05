import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProdutoService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProdutoEntity } from './entities/produto.entity';
import { CreateComponenteDto } from 'src/componente/dto/create-componente.dto';
import { ComponenteService } from 'src/componente/componente.service';{}


@Controller('api/v1/Produto')
@ApiTags('api/v1/')

@Controller('api/v1/produto')
export class ProdutoController {
  constructor(private readonly produtosService: ProdutoService) {}

  @Post()
  @ApiCreatedResponse({ type: ProdutoEntity })
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  

  @Get(':codigo')
  @ApiOkResponse({ type: ProdutoEntity })
  findOne(@Param('codigo') codigo: string) {
    return this.produtosService.findOne(codigo);
  }

  @Get()
  @ApiOkResponse({ type: ProdutoEntity, isArray: true })
  findAll() {
    return this.produtosService.findAll();
  }

   @Post(':codigo/componente')
  async criarComponente(
    @Param('codigo do produto') codigo: string,
    @Body() createComponenteDto: CreateComponenteDto,
  ) {
    const componente = await this.produtosService.criarComponente(codigo, createComponenteDto);
    return componente;
  } 


  @Get(':codigo/componente/:indice')
  async obterComponente(
    @Param('codigo') codigo: string,
    @Param('indice') indice: number,
  ) {
    const componente = await this.produtosService.obterComponentePorCodigoEIndice(codigo, indice);
    return componente;
  }
  @Get(':codigo/componente')
  async obterComponentesPorCodigo(@Param('codigo') codigo: string) {
    const componentes = await this.produtosService.obterComponentesPorCodigo(codigo);
    return componentes;
  }

  @Get('componente')
  async obterComponentesPorDescricao(@Query('descricao') descricao: string) {
    const componentes = await this.produtosService.obterComponentesPorDescricao(descricao);
    return componentes;
  }
}


