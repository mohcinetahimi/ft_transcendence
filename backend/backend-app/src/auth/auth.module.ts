import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),  // allows AuthService to access User entity
    JwtModule.register({
      secret: 'your_jwt_secret',       // ⚠️ move this to env variable later
      signOptions: { expiresIn: '1h' }, // tokens expire in 1 hour
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService], // so other modules can use AuthService if needed
})
export class AuthModule {}
