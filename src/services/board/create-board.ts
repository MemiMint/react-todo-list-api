import { BoardEntity, boardCollection } from "../../entities/board";

export const createBoard = async (
    projectId: string,
    title: string
): Promise<BoardEntity | null> => {
    try {
        const newBoard = new boardCollection({
            title,
            project_id: projectId
        }).save();
    
        if (!newBoard) return null;
    
        return newBoard;
    } catch (error) {
        console.error(error);
        return null;
    }
}