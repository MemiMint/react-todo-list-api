import { Resolver, Mutation, Arg } from "type-graphql";
import { BoardEntity } from "../../entities/board";
import { createBoard } from "../../services/board/create-board";

@Resolver()
export class CreateBoardResolver {
    @Mutation(() => BoardEntity)
    public async createBoard(@Arg("projectId") projectId: string, @Arg("title") title: string): Promise<BoardEntity | null> {
        const newBoard = await createBoard(projectId, title);

        if (!newBoard) return null;

        return newBoard;
    }
}