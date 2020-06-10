import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { User } from './entities/user.entity';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('findAll')
    async findAll(): Promise<any> {
        return await this.userService.findAll();
    }
    
    //CRUD
    // @Produces(MediaType.APPLICATION_JSON)
    @Post('create')
    async create(@Body() userData: User): Promise<any> {
        // return JSON.stringify( this.userService.create(userData));
        return this.userService.create(userData);
    }

    @Get(':id/read')
    async read(@Param('id') id, @Body() userData: User): Promise<any> {
        return this.userService.findOne(id);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        console.log(`Update user: ${userData}`);
        const userUpdate = await this.userService.update(userData);
        return userUpdate;
    }

    @Delete(':id/delete')
    async delete(@Param('id') id, @Body() userData: User): Promise<any> {
        return this.userService.delete(userData);
    }
}
