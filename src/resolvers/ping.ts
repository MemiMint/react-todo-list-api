import { Resolver, Query } from "type-graphql";

@Resolver()
export class PingResolver {
    @Query(() => String)
    public async ping(): Promise<string> {
        return "pong!";
    }
}