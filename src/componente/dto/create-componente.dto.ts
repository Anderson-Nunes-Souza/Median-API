// src/articles/dto/create-article.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import internal from 'stream';

export class CreateComponenteDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    codigo: number;
    
    @ApiProperty()
    indice: number;
    
    @ApiProperty({ required: false })
    SKU: string;

    @ApiProperty({ required: false })
    Descricao: string

    @ApiProperty()
    Preco: number;

    @ApiProperty()
    Quantidade: number

    @ApiProperty({required: true})
    produtoId: number
}
