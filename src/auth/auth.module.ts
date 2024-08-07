import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from './auth.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel,
        schemaOptions: {
          collection: 'Auth',
        },
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
