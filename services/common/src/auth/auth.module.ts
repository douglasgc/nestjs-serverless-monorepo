import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
@Module({
    imports: [
        UsersModule,
        PassportModule,
    ],
    providers: [JwtStrategy],
    exports: [],
})
export class AuthCommonModule { }