import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponenteService } from './componente.service';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ComponenteEntity } from './entities/componente.entity';

@Controller('Componente')
@ApiTags('Componente')

@Controller('componente')
export class ComponenteController {
  constructor(private readonly componenteService: ComponenteService) {}

  @Post()
  @ApiCreatedResponse({ type: ComponenteEntity })
  create(@Body() createComponenteDto: CreateComponenteDto) {
    return this.componenteService.create(createComponenteDto);
  }

  @Get()
  @ApiOkResponse({ type: ComponenteEntity, isArray: true })
  findAll() {
    return this.componenteService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ComponenteEntity })
  findOne(@Param('id') id: string) {
    return this.componenteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ComponenteEntity })
  update(@Param('id') id: string, @Body() updateComponenteDto: UpdateComponenteDto) {
    return this.componenteService.update(+id, updateComponenteDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ComponenteEntity })
  remove(@Param('id') id: string) {
    return this.componenteService.remove(+id);
  }
}
