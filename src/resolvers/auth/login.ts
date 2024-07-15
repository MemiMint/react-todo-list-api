import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcrypt";
import { LoginInput } from "../../input/login";
import { getUserByEmail } from "../../services/user/get-user-by-email";
import { UserEntity } from "../../entities/user";
import { AuthResponse } from "../../response/auth";
import { createToken, verifyToken } from "../../utils/jwt";


@Resolver(UserEntity)
export class LoginResolver {
    @Mutation(() => AuthResponse)
    public async login(@Arg("loginInput") loginInput: LoginInput): Promise<AuthResponse> {
        const user = await getUserByEmail(loginInput.email);

        if (!user) return {
            message: "User not found",
            token: null
        };

        const doesPasswordMatch: boolean = await bcrypt.compare(loginInput.password, user.password);

        if (!doesPasswordMatch) return {
            message: "Password is incorrect",
            token: null
        }

        const token = createToken({ id: user._id.toString(), name: user.name });

        return {
            token: token
        }
    }   
}