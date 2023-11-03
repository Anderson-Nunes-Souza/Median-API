import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoController } from './produtos.controller';
import { ProdutoService } from './produtos.service';

describe('ProdutosController', () => {
  let controller: ProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoController],
      providers: [ProdutoService],
    }).compile();

    controller = module.get<ProdutoController>(ProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
