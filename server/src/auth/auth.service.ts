import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService
  ) { }
  async validate(email: string, password: string): Promise<any> {
    try {
      const user = await this.databaseService.user.findUnique({
        where: {
          email: email
        }
      })
      if (!user) {
        return null
      }

      const isValidPassword = await bcrypt.compare(password, user.password)

      if (!isValidPassword) {
        return null
      }

      const { password: _, ...result } = user
      return result
    } catch (e) {
      throw new HttpException("Cannot validate", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(user: any) {
    try {
      const payload = {
        sub: user.id,
        email: user.email
      }
      const access_token = this.jwtService.sign(payload)
      const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' })

      await this.databaseService.user.update({
        where: {
          id: user.id
        },
        data: {
          refreshToken: refresh_token
        }
      })

      return {
        "access_token": access_token,
        "refresh_token": refresh_token
      }
    } catch (err) {
      throw new HttpException("Cannot login", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async refresh(refresh_token: string) {
    try {

      const payload = this.jwtService.verify(refresh_token);

      const user = await this.databaseService.user.findUnique({
        where: {
          id: payload.sub
        }
      });

      if (!user) {
        return null;
      }


      if (user.refreshToken !== refresh_token) {
        return null;
      }

      const access_token = this.jwtService.sign({ sub: user.id, email: user.email });
      return {
        access_token
      };

    } catch (e) {
      throw new HttpException("Cannot refresh", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }




}
