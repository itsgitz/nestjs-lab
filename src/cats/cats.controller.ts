import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    create(): string {
        return 'this action adds a new cat'
    }

    @Get()
    findAll(@Req() request: Request): string {
        return 'all cats are here!!!!'
    }
}
