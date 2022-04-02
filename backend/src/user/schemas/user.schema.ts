import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: number;

  @Prop({ require: true })
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  attendCount: number;

  @Prop()
  currentlyAttending: boolean;
  static id: any;
}

export const UserSchema = SchemaFactory.createForClass(User);