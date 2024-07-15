import { TaskEntity, taskCollection } from "../../entities/task";

export const deleteTask = async (id: string): Promise<TaskEntity | null> => {
    try {
        const task: TaskEntity | null = await taskCollection.findByIdAndDelete(id);

        if (!task) return null;

        return task;
    } catch (error) {
        console.error(error);

        return null;
    }
}