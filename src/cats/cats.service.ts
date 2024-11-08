import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-user.dto';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    async create(createCatDto: CreateCatDto) {
        console.log('create cat with data', createCatDto)
        return createCatDto
    }

    async findAll(): Promise<Cat[]> {
        return this.cats
    }
}
