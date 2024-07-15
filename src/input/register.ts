import { InputType, Field } from "type-graphql";

@InputType()
export class RegisterInput {
    @Field(() => String) 
    public name!: string;

    @Field(() => String) 
    public email!: string;

    @Field(() => String)
    public password!: string;
}