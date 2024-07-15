import { TaskEntity, taskCollection } from "../../entities/task";

export const createTask = async (
    boardId: string,
    title: string,
    description: string,
    status: string,
    risk: string,
    tags: string[]
): Promise<TaskEntity | null> => {
    try {
        const newTask = new taskCollection({
            title,
            board_id: boardId,
            description,
            status,
            risk,
            tags
        }).save();
    
        if (!newTask) return null;
    
        return newTask;
    } catch (error) {
        console.error(error);
        return null;
    }
}