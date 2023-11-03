// src/articles/entities/article.entity.ts

import { Componente } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ComponenteEntity implements Componente {
  @ApiProperty()
  id: number;

  @ApiProperty()
  codigo: number;

  @ApiProperty({ required: false, nullable: true })
  indice: number;

  @ApiProperty()
  SKU: string;

  @ApiProperty()
  Descricao: string;

  @ApiProperty()
  Preco: number;

  @ApiProperty()
  Quantidade: number;

  @ApiProperty()
  produtoId: number;
}
