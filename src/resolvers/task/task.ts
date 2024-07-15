import { Resolver, Arg, Query } from "type-graphql";
import { TaskEntity } from "../../entities/task";
import { getTaskById } from "../../services/task/get-task-by-id";

@Resolver()
export class GetTaskResolver {
    @Query(() => TaskEntity)
    public async task(@Arg("id") id: string): Promise<TaskEntity | null> {
        const task = await getTaskById(id);

        if (!task) return null;

        return task;
    }
}