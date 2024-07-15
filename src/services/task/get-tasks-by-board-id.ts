import { TaskEntity, taskCollection } from "../../entities/task";

export const getTasksByBoardId = async (boardId: string): Promise<TaskEntity[] | null> => {
    try {
        const tasks: TaskEntity[] | null = await taskCollection.find({ board_id: boardId });

        if (!tasks) return null;

        return tasks;
    } catch (error) {
        console.error(error);

        return null;
    }
}