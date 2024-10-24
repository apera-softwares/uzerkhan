import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { LoginUserDto } from "src/validations/userValidation/loginUser.dto";

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService
    ) { }

    async login(data: LoginUserDto) {


        const user = await this.prisma.users.findUnique({
            where: {
                email: data?.email
            }
        })

        if (!user) {
            throw new HttpException('User does not exist', HttpStatus.NOT_FOUND)
        }

        if (data?.password !== user?.password) {
            throw new HttpException('Invalid Password', HttpStatus.FORBIDDEN)
        }

        try {

            if (user) {

                return {
                    status: true,
                    statusCode: HttpStatus.OK,
                    userData: user,
                    message: "Login successfully"
                }

            }

        } catch (error) {
            console.log(error)
            throw new HttpException('Something went wrong while login', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
}