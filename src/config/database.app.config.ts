import { SequelizeModuleOptions } from '@nestjs/sequelize';

export function databaseConfig(test?: boolean): SequelizeModuleOptions {
  let storage = 'database/database.sqlite'
  if (test) {
    storage = 'database/database.test.sqlite'
  }

  return {
    dialect: 'sqlite',
    storage,
    autoLoadModels: true
  } 
};
