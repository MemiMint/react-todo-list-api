import { prop, getModelForClass } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class TaskEntity {
    @Field(() => ID)
    public _id!: mongoose.Types.ObjectId;

    @Field(() => String)
    @prop({ type: String })
    public board_id!: string;

    @Field(() => String)
    @prop({ type: String })
    public title!: string;

    @Field(() => String)
    @prop({ type: String })
    public description!: string;

    @Field(() => String)
    @prop({ type: String })
    public status!: string;

    @Field(() => String)
    @prop({ type: String })
    public risk!: string;

    @Field(() => [String])
    @prop({ type: String, default: [] })
    public tags!: mongoose.Types.Array<string>;
}

export const taskCollection = getModelForClass(TaskEntity);