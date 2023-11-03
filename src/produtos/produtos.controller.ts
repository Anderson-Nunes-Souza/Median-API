import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProdutoEntity } from './entities/produto.entity';
import { ComponenteService } from '../componente/componente.service';


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
}


