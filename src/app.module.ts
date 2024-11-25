import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from '@config/database.app.config';
import { CatsModule } from './cats/cats.module';
import { FileModule } from './file/file.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot(databaseConfig(false)),
    UsersModule,
    CatsModule,
    FileModule,
  ],
})
export class AppModule {}
