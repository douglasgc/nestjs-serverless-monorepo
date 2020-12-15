import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '@services/common/auth/jwt-auth.guard';
@Controller('profile')
export class ProfileController {
    @UseGuards(JwtAuthGuard)
    @Get('')
    getProfile(@Request() req) {
        return req.user;
    }
}
