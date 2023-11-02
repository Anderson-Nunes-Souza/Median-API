// src/articles/dto/create-article.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateComponenteDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    codigo: string;
    
    @ApiProperty()
    indice: number;
    
    @ApiProperty({ required: false })
    SKU: string;

    @ApiProperty({ required: false })
    Descricao: string

    @ApiProperty()
    Preco: Float32List

    @ApiProperty()
    Quantidade: number
}
