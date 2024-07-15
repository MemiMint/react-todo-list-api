import { Resolver, Mutation, Arg } from "type-graphql";
import { deleteTask } from "../../services/task/delete-task";
import { TaskEntity } from "../../entities/task";

@Resolver()
export class DeleteTaskResolver {
    @Mutation(() => TaskEntity)
    public async deleteTask(@Arg("id") id: string): Promise<TaskEntity | null> {
        const deletedTask = await deleteTask(id);

        if (!deletedTask) {
            return null;
        }

        return deletedTask;
    }
}