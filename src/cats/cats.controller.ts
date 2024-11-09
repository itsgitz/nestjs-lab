import { Body, Controller, Get, Post } from '@nestjs/common';
import { ICat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const cat = await this.catService.create(createCatDto) 
    return { id: cat }
  }

  @Get()
  async findAll(): Promise<ICat[]> {
    return await this.catService.findAll();
  }
}
