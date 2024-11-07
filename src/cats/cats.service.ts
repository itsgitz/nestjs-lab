import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ICat } from './interfaces/cat.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = []

  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<ICat>
  ){}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat()
    cat.name = createCatDto.name
    cat.age = createCatDto.age
    cat.breed = createCatDto.breed

    return this.catRepository.save(cat)
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
