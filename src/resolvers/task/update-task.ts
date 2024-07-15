import { Resolver, Mutation, Arg } from "type-graphql";
import { updateTask } from "../../services/task/update-task";
import { TaskEntity } from "../../entities/task";
import { TaskInput } from "../../input/task";

@Resolver()
export class UpdateTaskResolver {
    @Mutation(() => TaskEntity)
    public async updateTask(@Arg("id") id: string, @Arg("taskInput") taskInput: TaskInput): Promise<TaskEntity | null> {
        const updatedTask = await updateTask(
            id,
            taskInput.title,
            taskInput.description,
            taskInput.status,
            taskInput.risk,
            taskInput.tags
        );

        if (!updateTask) return null;

        return updatedTask;
    }
}