import { Body, Controller, Get, Post, Res, Param, HttpStatus, Put } from '@nestjs/common';
import { response } from 'express';
import { UserService } from 'src/user/service/user/user.service';
import { UserDto, isAttending, ListUserDTO } from '../../dto/user.dto';

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
    async findAll() {
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
    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const user = await this.userService.getById(id);
        return response.status(HttpStatus.OK).json({
            user
        })
    }

    @Put('/attending/:id')
    async updateUserAttending(@Res() response, @Param('id') id, @Body() attending: isAttending) {
        const isSucces = await this.userService.updateUserCurrentlyAttending(id, attending.attending);
        if (isSucces) {
            return response.status(HttpStatus.OK).json({
                isSucces
            })
        }
    }
}
