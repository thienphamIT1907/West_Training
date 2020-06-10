import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './UserModule/user.module';
import { User } from './UserModule/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'codegym',
      password: 'codegym1',
      database: 'testorm',
      // entities: [__dirname + '.*/*.entity{.ts,.js}'],
      entities: [User],
      synchronize: true
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
