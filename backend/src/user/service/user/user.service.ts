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

    async updateUserCurrentlyAttending(id: number): Promise<boolean> {
        return await this.UserModule.findOneAndUpdate({ _id: id }, [{ $set: { present: { $eq: [false, "$present"] } } }]);
    }

    async search(query: string): Promise<User[]> {

        let x = await this.UserModule.find().or([
            { first_name: { "$regex": query, "$options": "i" } },
            { last_name: { "$regex": query, "$options": "i" } }
        ]).exec();
        return x;

    }
}
