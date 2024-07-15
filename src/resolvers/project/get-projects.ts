import { Resolver, Arg, Query, Ctx } from "type-graphql";
import { ProjectEntity } from "../../entities/project";
import { getProjectsByOwnerId } from "../../services/project/get-projects-by-owner-id";
import { Context, Payload } from "../../types";
import { verifyToken } from "../../utils/jwt";

@Resolver()
export class GetProjectsResolver {
    @Query(() => [ProjectEntity])
    public async projects(@Ctx() context: Context): Promise<ProjectEntity[] | null> {
        const authorization = context.req.headers["authorization"];

        if (!authorization) return null;

        const token = authorization.split(" ")[1];

        const payload = (verifyToken(token)) as Payload;

        const projects = await getProjectsByOwnerId(payload.id);

        if (!projects) return null;

        return projects;
    }
}