import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:rootpassword@db:27017/nest?authMechanism=DEFAULT&authSource=admin'),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
