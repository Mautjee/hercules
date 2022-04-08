import { Body, Controller, Get, Post, Res, Param, HttpStatus, Put, Query } from '@nestjs/common';
import { response } from 'express';
import { UserService } from 'src/user/service/user/user.service';
import { UserDto, isAttending, ListUserDTO } from '../../dto/user.dto';

interface searchQuery {
    query: string;
}

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async create(@Res() response, @Body() user: UserDto) {
        const addedUser = await this.userService.create(user);
        return response.status(HttpStatus.OK).json({
            addedUser
        })
    }

    @Get()
    async findAll(): Promise<UserDto[]> {
        const users = await this.userService.findAll();
        //const listUsers: ListUserDTO = { usersList: users };
        return users;
    }

    @Get('/limit/:limit')
    async getLimitited(@Res() response, @Param('limit') limit) {
        const list = await this.userService.findAllLimit(limit);
        return response.status(HttpStatus.OK).json({
            list
        })
    }
    @Get('/id')
    async findById(@Res() response, @Query('id') id) {
        const user = await this.userService.getById(id);
        return response.status(HttpStatus.OK).json({
            user
        })
    }

    @Put('/attending/:id')
    async updateUserAttending(@Res() response, @Param('id') id) {
        const isSucces = await this.userService.updateUserCurrentlyAttending(id);
        if (isSucces) {
            return response.status(HttpStatus.OK).json({
                isSucces
            })
        }
    }

    @Get('/search/')
    async search(@Res() response, @Query('query') query) {
        console.log(query);
        const result = await this.userService.search(query);
        if (result) {
            return response.status(HttpStatus.OK).json({
                result
            })
        }
    }
}
