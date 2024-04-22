import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private us: UsersService, private jwt: JwtService) {}

    async signIn(
        username: string,
        password: string,
      ): Promise<{ access_token: string }> {
        const user = await this.us.findOne(username);
        if (user?.password !== password) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
          access_token: await this.jwt.signAsync(payload),
        };
    }
}
