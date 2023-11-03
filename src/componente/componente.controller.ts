import { Controller, Post, Param, Body } from '@nestjs/common';
import { ComponenteService } from './componente.service'; // Importe o serviço apropriado
import { CreateComponenteDto } from './dto/create-componente.dto'; // Importe o DTO apropriado

@Controller('api/v1/produto')
export class ComponenteController {
  constructor(private readonly componenteService: ComponenteService) {}

  @Post(':codigo/componente')
  async criarComponente(
    @Param('codigo') codigo: string,
    @Body() componenteData: CreateComponenteDto,
  ) {
    try {
      const componente = await this.componenteService.criarComponente(codigo, componenteData);
      return { message: 'Componente criado com sucesso', componente };
    } catch (error) {
      console.error(error);
      //throw new InternalServerErrorException('Erro ao criar o componente');
    }
  }
}