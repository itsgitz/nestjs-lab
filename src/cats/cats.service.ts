import { Injectable } from '@nestjs/common';
import { ICat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [];

  constructor(
    @InjectModel(Cat)
    private catModel: typeof Cat,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<string | null> {
    console.log('create cat with data', createCatDto);
    const cat = await this.catModel.create({
      ...createCatDto,
    });

    return cat.id;
  }

  async findAll(): Promise<ICat[]> {
    const cats = await this.catModel.findAll();

    return cats;
  }
}
