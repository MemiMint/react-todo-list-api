import { ProjectEntity, projectCollection } from "../../entities/project";

export const getProjectsByOwnerId = async (ownerId: string): Promise<ProjectEntity[] | null> => {
    try {
        const projects = await projectCollection.find({ owner_id: ownerId });

        if (!projects) return null;

        return projects
    } catch (error) {
        console.error(error);

        return null;
    }
}
