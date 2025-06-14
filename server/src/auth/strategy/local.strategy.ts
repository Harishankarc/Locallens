import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy){
  constructor(private readonly authService : AuthService){
    super({
      usernameField : 'email'
    })
  }
  async validate(email : string , password : string){
    console.log(email,password)
    const user =  await this.authService.validate(email,password)
    if(!user){
      throw new UnauthorizedException();
    }
    return user;
  }
}