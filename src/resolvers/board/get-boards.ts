import { Resolver, Query, Arg } from "type-graphql";
import { BoardEntity } from "../../entities/board";
import { getBoards } from "../../services/board/get-boards";

@Resolver()
export class GetBoardsResolver {
    @Query(() => [BoardEntity])
    public async boards(@Arg("projectId") projectId: string,): Promise<BoardEntity[] | null> {
        const boards = await getBoards(projectId);

        if (!boards) return null;

        return boards;
    }
}