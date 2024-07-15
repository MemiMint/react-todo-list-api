import { Resolver, Query, Arg } from "type-graphql";
import { getTasksByBoardId } from "../../services/task/get-tasks-by-board-id";
import { TaskEntity } from "../../entities/task";

@Resolver()
export class GetTasksResolver {
    @Query(() => [TaskEntity])
    public async tasks(@Arg("boardId") boardId: string): Promise<TaskEntity[] | null> {
        const tasks = await getTasksByBoardId(boardId);

        if (!tasks) return null;

        return tasks;
    }
}