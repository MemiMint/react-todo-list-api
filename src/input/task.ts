import { InputType, Field } from "type-graphql";

@InputType()
export class TaskInput {

    @Field(() => String)
    public board_id!: string;

    @Field(() => String)
    public title!: string;

    @Field(() => String)
    public description!: string;

    @Field(() => String)
    public status!: string;

    @Field(() => String)
    public risk!: string;

    @Field(() => [String])
    public tags!: string[]
}