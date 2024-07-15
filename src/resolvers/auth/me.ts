import { Resolver, Query, Ctx } from "type-graphql";
import { Context, Payload } from "../../types/index";
import { UserEntity } from "../../entities/user";
import { verifyToken } from "../../utils/jwt";
import { getUserById } from "../../services/user/get-user-by-id";
import { AuthResponse } from "../../response/auth";

@Resolver(UserEntity)
export class MeResolver {
    @Query(() => UserEntity)
    public async me(@Ctx() context: Context): Promise<UserEntity | null> {
        const authorization = context.req.headers["authorization"];

        if (!authorization) return null;

        const token = authorization.split(" ")[1];

        const payload = verifyToken(token);

        const user = await getUserById((payload as Payload).id);

        if (!user) return null;

        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        }
    }
}