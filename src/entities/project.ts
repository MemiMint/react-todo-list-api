import { prop, getModelForClass } from "@typegoose/typegoose";
import mongoose, { mongo } from "mongoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class ProjectEntity {
    @Field(() => ID)
    public _id!: mongoose.Types.ObjectId;

    @Field(() => String)
    @prop({ type: String })
    public owner_id!: string;

    @Field(() => String)
    @prop({ type: String })
    public title!: string;
}

export const projectCollection = getModelForClass(ProjectEntity);