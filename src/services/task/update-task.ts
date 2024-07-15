import { TaskEntity, taskCollection } from "../../entities/task";

export const updateTask = async (
    id: string,
    title: string,
    description: string,
    status: string,
    risk: string,
    tags: string[]
): Promise<TaskEntity | null> => {
    try {
        const updatedTask = await taskCollection.findByIdAndUpdate(id, {
            title,
            description,
            status,
            risk,
            tags
        });

        if (!updateTask) return null;

        return updatedTask;
    } catch (error) {
        console.error(error);

        return null;
    }
}