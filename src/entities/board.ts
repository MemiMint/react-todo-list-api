import { prop, getModelForClass } from "@typegoose/typegoose";
import mongoose, { mongo } from "mongoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class BoardEntity {
    @Field(() => ID)
    public _id!: mongoose.Types.ObjectId;

    @Field(() => String)
    @prop({ type: String })
    public project_id!: string;

    @Field(() => String)
    @prop({ type: String })
    public title!: string;

    @Field(() => [String])
    @prop({ type: String, default: [] })
    public tasks!: string[];
}

export const boardCollection = getModelForClass(BoardEntity);