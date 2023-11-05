// src/articles/dto/create-article.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import internal from 'stream';

export class CreateComponenteDto {

    @ApiProperty()
    id: number;
    
    @ApiProperty()
    codigo: string;
    
    @ApiProperty({ required: false })
    indice: number;
    
    @ApiProperty({ required: false })
    SKU: string;

    @ApiProperty({ required: false })
    Descricao: string

    @ApiProperty({ required: false })
    Preco: number;

    @ApiProperty({ required: false })
    Quantidade: number

     @ApiProperty({ required: false })
    produto: String

    @ApiProperty({required: true})
    produtoId: number

}
