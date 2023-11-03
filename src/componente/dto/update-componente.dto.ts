import { PartialType } from '@nestjs/swagger';
import { CreateComponenteDto } from './create-componente.dto';

//export class UpdateComponenteDto extends PartialType(CreateComponenteDto) {}

 export class UpdateComponenteDto {
    id: number; // Substitua pelo tipo correto
    codigo: number; // Substitua pelo tipo correto
    indice: number;
    SKU: string;
    Descricao: string;
    Preco: number;
    Quantidade: number;
    produtoId: number;
  }  
  