import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsModule } from './cats.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from '@config/database.app.config';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forRoot(databaseConfig(true)), CatsModule],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
