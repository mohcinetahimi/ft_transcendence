import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',        // default superuser
      database: 'transcendence',   // the DB you created
      autoLoadEntities: true,      // will load entities automatically
      synchronize: true,           // auto create tables (good for dev only!)
    }),
    UsersModule,
    AuthModule,
    JwtModule.register({ secret: 'your_jwt_secret', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
