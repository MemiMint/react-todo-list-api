import { Mongoose, ConnectOptions } from "mongoose";

export const options: ConnectOptions = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 4000,
  family: 4,
};