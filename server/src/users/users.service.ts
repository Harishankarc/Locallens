import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService : DatabaseService,
    private readonly jwtService : JwtService
  ){}

  async register(userData : Prisma.UserCreateInput){
    try{
      const saltround = 10
      const hashedPassword = await bcrypt.hash(userData.password, saltround);
      const user = await this.databaseService.user.create({
        data : {
          email : userData.email,
          name : userData.name,
          password: hashedPassword
        }
      })
      const {password: _,...result} = user
      return result;
    }catch(err){
      throw new HttpException("Cannot create user or user already exists", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



}
