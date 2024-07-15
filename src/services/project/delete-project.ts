import { ProjectEntity, projectCollection } from "../../entities/project";

export const deleteProject = async (id: string): Promise<ProjectEntity | null> => {
    try {
        const deletedProject = await projectCollection.findByIdAndDelete(id);

        if (!deleteProject) return null;

        return deletedProject;
    } catch (error) {
        console.error(error);

        return null;
    }
}
