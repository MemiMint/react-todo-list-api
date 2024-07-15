import { Resolver, Mutation, Arg } from "type-graphql";
import { RegisterInput } from "../../input/register";
import { createUser } from "../../services/user/create-user";
import { UserEntity } from "../../entities/user";
import { encryptPassword } from "../../utils/encrypt-password";
import { AuthResponse } from "../../response/auth";
import { createToken } from "../../utils/jwt";

@Resolver(UserEntity)
export class RegisterResolver {
    @Mutation(() => AuthResponse)
    public async register(@Arg("registerInput") registerInput: RegisterInput): Promise<AuthResponse> {        
        const user = await createUser(registerInput.name, registerInput.email, await encryptPassword(registerInput.password));

        if (!user) return {
            message: "Something went wrong",
            token: null
        }

        const token = createToken({ id: user._id.toString(), name: user.name });

        return {
            message: "User has been created successfully",
            token: token
        }
    }   
}