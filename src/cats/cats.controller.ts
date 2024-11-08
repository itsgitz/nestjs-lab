import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-user.dto';

@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return await this.catService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return await this.catService.findAll()
    }
}
