import { Resolver, Mutation, Arg } from "type-graphql";
import { BoardEntity } from "../../entities/board";
import { deleteBoard } from "../../services/board/delete-board";

@Resolver()
export class DeleteBoardResolver {
    @Mutation(() => BoardEntity)
    public async deleteBoard(@Arg("id") id: string): Promise<BoardEntity | null> {
        const deletedBoard = await deleteBoard(id);

        if (!deletedBoard) return null;

        return deletedBoard;
    }
}