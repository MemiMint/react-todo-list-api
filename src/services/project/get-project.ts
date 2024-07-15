import { ProjectEntity, projectCollection } from "../../entities/project";

export const getProjectById = async (id: string): Promise<ProjectEntity | null> => {
    try {
        const project = await projectCollection.findOne({ _id: id });

        if (!project) return null;

        return project
    } catch (error) {
        console.error(error);

        return null;
    }
}
