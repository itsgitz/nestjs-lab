import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from '@config/database.app.config';
import { UsersModule } from './users.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forRoot(databaseConfig(true)), UsersModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
