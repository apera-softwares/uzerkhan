import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "src/validations/userValidation/loginUser.dto";

@Controller('admin')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post('login')
    login(
        @Body() data: LoginUserDto
    ) {
        return this.authService.login(data)
    }

}