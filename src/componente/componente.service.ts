import { Injectable } from '@nestjs/common';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';

@Injectable()
export class ComponenteService {
  create(createComponenteDto: CreateComponenteDto) {
    return 'This action adds a new componente';
  }

  findAll() {
    return `This action returns all componente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} componente`;
  }

  update(id: number, updateComponenteDto: UpdateComponenteDto) {
    return `This action updates a #${id} componente`;
  }

  remove(id: number) {
    return `This action removes a #${id} componente`;
  }
}
