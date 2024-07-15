import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { ProjectEntity } from "../../entities/project";
import { createProject } from "../../services/project/create-project";
import { Context, Payload } from "../../types";
import { verifyToken } from "../../utils/jwt";

@Resolver()
export class CreateProjectResolver {
    @Mutation(() => ProjectEntity)
    public async createProject(
        @Arg("title") title: string, 
        @Ctx() context: Context
    ): Promise<ProjectEntity | null> {
        const authorization = context.req.headers["authorization"];

        if (!authorization) return null;

        const token = authorization.split(" ")[1];

        const payload = (verifyToken(token)) as Payload;

        console.log("payload: ", payload);

        const newProject = await createProject(title, payload.id);

        if (!newProject) return null;

        return newProject;
    }
}