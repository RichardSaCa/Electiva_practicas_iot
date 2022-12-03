import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [  AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
       type: 'mongodb',
       url: 'mongodb+srv://admin:<password>@cluster0.ico1ydr.mongodb.net/?retryWrites=true&w=majority',
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
