import { Resolver, Query, Arg } from "type-graphql";
import { getProjectById } from "../../services/project/"
import { ProjectEntity } from "../../entities/project";

@Resolver()
export class GetProject {
    @Query(() => ProjectEntity)
    public async project(@Arg("id") id: string): Promise<ProjectEntity | null> {
        const project = await getProjectById(id);

        if (!project) return null;

        return project;
    }
}