import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProdutoEntity } from './entities/produto.entity';

@Controller('Produtos')
@ApiTags('Produtos')

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

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

/*   @Patch(':id')
  @ApiOkResponse({ type: ProdutoEntity })
  update(@Param('id') id: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);  }

  @Delete(':id')
  @ApiOkResponse({ type: ProdutoEntity })
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id); */
  }
