import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from 'configs/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      // Импорты чтобы использовать
      imports: [ConfigModule],
      // Встраивать в резолв зависимостей при инициализации
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    ProductModule,
    AuthModule,
    TopPageModule,
    ReviewModule,
  ],
})
export class AppModule {}
