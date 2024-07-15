import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, Int, ID } from "type-graphql";
import mongoose, { mongo } from "mongoose";

@ObjectType()
export class UserEntity {
    @Field(() => ID)
    public _id!: mongoose.Types.ObjectId;

    @Field(() => String)
    @prop({ type: String })
    public name!: string;

    @Field(() => String)
    @prop({ type: String })
    public email!: string;
    
    @Field(() => String)
    @prop({ type: String })
    public password!: string;
}

export const userCollection = getModelForClass(UserEntity);