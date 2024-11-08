import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private sequelize: Sequelize,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log('create user dto', createUserDto)

    const user = await this.userModel.create({...createUserDto})
    console.log('new user', user)

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.findAll()
    return users
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id)
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const remove = this.userModel.destroy({
      where: {
        id
      }
    })
    return remove;
  }
}
