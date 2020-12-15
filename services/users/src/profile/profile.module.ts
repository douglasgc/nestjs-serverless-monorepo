import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { AuthCommonModule } from '@services/common/auth/auth.module';

@Module({
  imports: [
    AuthCommonModule
  ],
  controllers: [ProfileController]
})
export class ProfileModule { }
