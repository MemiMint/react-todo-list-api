import { BoardEntity, boardCollection } from "../../entities/board";

export const deleteBoard = async (id: string): Promise<BoardEntity | null> => {
    const deletedBoard = await boardCollection.findByIdAndDelete(id);

    if (!deletedBoard) return null;

    return deletedBoard;
}