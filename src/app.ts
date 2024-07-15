import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PingResolver } from "./resolvers/ping";
import { LoginResolver, RegisterResolver } from "./resolvers/auth";
import { CreateBoardResolver, GetBoardsResolver } from "./resolvers/board";
import { CreateProjectResolver, DeleteProjectResolver, GetProjectsResolver, GetProject } from "./resolvers/project";
import { CreateTaskResolver, DeleteTaskResolver, GetTaskResolver, UpdateTaskResolver } from "./resolvers/task";
import { Settings } from "./settings";
import { Middlewares } from "./middleware";
import { DatabaseConnection } from "./database";
import { config } from "dotenv";
import { MeResolver } from "./resolvers/auth/me";
import { GetTasksResolver } from "./resolvers/task/get-tasks";
import { DeleteBoardResolver } from "./resolvers/board/delete-board";

export class App extends DatabaseConnection {
    private app: Application;
    private middlewares: Middlewares;
    private settings: Settings;

    constructor() {
        super();
        config();

        this.app = express();
        this.middlewares = new Middlewares(this.app);
        this.settings = new Settings(this.app);
    }

    public async Init() {
        await this.middlewares.Init();
        await this.settings.Init();

        const server: ApolloServer = new ApolloServer({
            schema: await buildSchema({
                resolvers: [
                    PingResolver, 
                    LoginResolver, 
                    RegisterResolver, 
                    MeResolver,
                    CreateProjectResolver,
                    GetProjectsResolver,
                    GetProject,
                    DeleteProjectResolver,
                    CreateBoardResolver,
                    GetBoardsResolver,
                    CreateBoardResolver,
                    GetBoardsResolver,
                    CreateTaskResolver,
                    GetTaskResolver,
                    GetTasksResolver,
                    CreateTaskResolver,
                    UpdateTaskResolver,
                    DeleteTaskResolver,
                    DeleteBoardResolver
                ],
                validate: false
            }),
            context: ({ req, res }) => ({ req, res })
        });

        await server.start();

        server.applyMiddleware({app: (this.app as any), path: "/graphql" });
    
        await this.app.listen(this.app.get("port"), () => {
            this.GetConnection();
            console.log("listening on port: ", this.app.get("port"));
        });
    }
}