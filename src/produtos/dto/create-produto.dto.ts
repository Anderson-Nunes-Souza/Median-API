// src/articles/dto/create-article.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  codigo: string;

  @ApiProperty({ required: false })
  nome?: string;

}
