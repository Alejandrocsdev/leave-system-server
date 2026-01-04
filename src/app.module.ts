import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // isGlobal: false,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production'),
        PORT: Joi.number().port(),
        MONGODB_URI: Joi.string().uri(),
      }),
      // validationOptions: {
      //   allowUnknown: true,
      //   abortEarly: false,
      // },
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
  ],
})
export class AppModule {}
