import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponenteService } from './componente.service';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';

@Controller('componente')
export class ComponenteController {
  constructor(private readonly componenteService: ComponenteService) {}

  @Post()
  create(@Body() createComponenteDto: CreateComponenteDto) {
    return this.componenteService.create(createComponenteDto);
  }

  @Get()
  findAll() {
    return this.componenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponenteDto: UpdateComponenteDto) {
    return this.componenteService.update(+id, updateComponenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componenteService.remove(+id);
  }
}
