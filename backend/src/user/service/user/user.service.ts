import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '../../dto/user.dto';
import { User, UserDocument } from '../../schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModule: Model<UserDocument>) { }

    async create(user: UserDto): Promise<User> {
        const createdUser = new this.UserModule(user);
        return await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.UserModule.find().exec();
    }
    async findAllLimit(limit: number): Promise<User[]> {
        return await this.UserModule.find().limit(limit).exec();
    }
    async getById(id: number): Promise<User> {
        return await this.UserModule.findById(id).exec();
    }

    async updateUserCurrentlyAttending(id: number, attending: boolean): Promise<boolean> {
        const user = await this.UserModule.updateOne({ _id: id }, {
            $set: {
                currentlyAttending: attending
            }
        })

        return user.acknowledged
    }
}
