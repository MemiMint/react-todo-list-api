import { TaskEntity, taskCollection } from "../../entities/task";

export const getTaskById = async (id: string): Promise<TaskEntity | null> => {
    try {
        const task: TaskEntity | null = await taskCollection.findById(id);

        if (!task) return null;

        return task;
    } catch (error) {
        console.error(error);

        return null;
    }
}