import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: `database/database.sqlite`,
  autoLoadModels: true
};
