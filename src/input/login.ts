import { InputType, Field } from "type-graphql";

@InputType()
export class LoginInput {
    @Field(() => String) 
    public email!: string;

    @Field(() => String)
    public password!: string;
}