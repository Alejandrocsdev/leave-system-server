import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      // isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production'),
        PORT: Joi.number().port(),
      }),
      // validationOptions: {
      //   allowUnknown: true,
      //   abortEarly: false,
      // },
    }),
  ],
})
export class AppModule {}
