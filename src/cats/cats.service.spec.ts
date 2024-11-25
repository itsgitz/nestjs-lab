import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { CatsModule } from './cats.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from '@config/database.app.config';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forRoot(databaseConfig(true)), CatsModule],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
