import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalAuthStrategy } from 'src/auth/strategy/local.strategy';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService,JwtService],
  exports:[UsersService]
})
export class UsersModule {}
