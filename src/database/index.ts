import mongoose from "mongoose";
import { config } from "dotenv";
import { options } from  "./options";

export abstract class DatabaseConnection {
    private readonly mongodbUri: string;

    constructor() {
        config();
        this.mongodbUri = "mongodb+srv://yeferson:nHKDsaqhv3cIgQRe@task-list.mfxtkwy.mongodb.net/?retryWrites=true&w=majority&appName=task-list";
    }

    protected async GetConnection() {
        mongoose
        .connect(this.mongodbUri, options)
        .then((db) => {
            if (db.connection.readyState === db.ConnectionStates.connected) {
                console.log("Database is connected");
            }

            if (db.connection.readyState === db.ConnectionStates.disconnected) {
                console.log("Database is disconnected");
            }
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
}