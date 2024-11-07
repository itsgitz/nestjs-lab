import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      database: './src/database/database.sqlite',
      autoLoadModels: true,
    }),
    UsersModule, 
  ],
})
export class AppModule {}
