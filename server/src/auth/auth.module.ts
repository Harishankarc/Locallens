import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalAuthStrategy } from './strategy/local.strategy';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports:[UsersModule,DatabaseModule,PassportModule,JwtModule.register({
    secret: "qjfbVRsjgioninuVUUVYUVbybuivbiyuvuybubfuiwbp;inpHU",
    signOptions: { expiresIn: '1d' }

  })],
  controllers: [AuthController],
  providers: [AuthService,LocalAuthStrategy,JwtStrategy]
})
export class AuthModule {}
