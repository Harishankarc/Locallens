import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService){}
  @Post("register")
  async register(@Body() userData : Prisma.UserCreateInput){
    return await this.usersService.register(userData);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req){
    return await this.authService.login(req.user);
  }

  @Post('refresh')
  async refresh(@Body() body : {refresh_token : string}){
    return await this.authService.refresh(body.refresh_token)
  }

}
