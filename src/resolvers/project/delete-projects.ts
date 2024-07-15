import { Resolver, Arg, Mutation } from "type-graphql";
import { ProjectEntity } from "../../entities/project";
import { deleteProject } from "../../services/project/delete-project";

@Resolver()
export class DeleteProjectResolver {
    @Mutation(() => ProjectEntity)
    public async deleteProject(@Arg("id") id: string): Promise<ProjectEntity | null> {
        const deletedProject = await deleteProject(id);

        if (!deletedProject) return null;

        return deletedProject;
    }
}