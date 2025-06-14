import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey : "qjfbVRsjgioninuVUUVYUVbybuivbiyuvuybubfuiwbp;inpHU",
      ignoreExpiration : false
    })
  }
  async validate(payload : any) {
    return {
      id : payload.sub,
      email : payload.email
    }
  }
}