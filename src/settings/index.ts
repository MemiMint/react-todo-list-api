import { Application } from "express";
import { config } from "dotenv";

export class Settings {
    private app: Application;

    constructor(_app: Application) {
        config();
        this.app = _app;
    }

    public Init() {
        this.app.set("port", process.env.PORT || 4000);
    }
}