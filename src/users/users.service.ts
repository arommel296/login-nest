import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    private users = [
        {
            id: "1",
            username:"aaa",
            password: "asdfghjk"
        },
        {
            id: "2",
            username:"bbb",
            password: "asdfghjk"
        }
    ];

    async findOne (username: string): Promise<User | any> {
        return this.users.find(user => user.username === username);
    }
}