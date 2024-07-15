import { BoardEntity, boardCollection } from "../../entities/board";

export const getBoards = async (
    projectId: string,
): Promise<BoardEntity[] | null> => {
    try {
        const boards = await boardCollection.find({ project_id: projectId });

        if (!boards) return null;

        return boards;
    } catch (error) {
        console.error(error);
        return null;
    }
}