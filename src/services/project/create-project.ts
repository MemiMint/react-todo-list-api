import { ProjectEntity, projectCollection } from "../../entities/project";

export const createProject = async (title: string, ownerId: string): Promise<ProjectEntity | null> => {
    try {
        const newProject = new projectCollection({
            title: title,
            owner_id: ownerId
        }).save();

        if (!newProject) return null;

        return newProject;
    } catch (error) {
        console.error(error);

        return null;
    }
}
