import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UserDto {
    @IsNumber()
    _id: number;
    @IsString()
    first_name: string;
    @IsString()
    last_name: string;
    @IsNumber()
    attendCount: number;
    @IsBoolean()
    currentlyAttending: boolean;
}

export class ListUserDTO {
    usersList: UserDto[];
}

export class isAttending {
    @IsBoolean()
    attending: boolean
}