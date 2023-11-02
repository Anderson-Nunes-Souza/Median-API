// src/articles/entities/article.entity.ts

import { Produto } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProdutoEntity implements Produto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  codigo: string;

  @ApiProperty({ required: false, nullable: true })
  nome: string;

}
