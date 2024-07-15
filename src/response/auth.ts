import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AuthResponse {
    @Field(() => String, { nullable: true })
    public message?: string | null;

    @Field(() => String, { nullable: true })
    public token?: string | null;
}