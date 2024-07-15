import { Resolver, Mutation, Arg } from "type-graphql";
import { BoardEntity } from "../../entities/board";
import { createTask } from "../../services/task/create-task";
import { TaskEntity } from "../../entities/task";
import { TaskInput } from "../../input/task";

@Resolver()
export class CreateTaskResolver {
    @Mutation(() => TaskEntity)
    public async createTask(@Arg("taskInput") taskInput: TaskInput): Promise<TaskEntity | null> {
        const newTask = await createTask(
            taskInput.board_id,
            taskInput.title,
            taskInput.description,
            taskInput.status,
            taskInput.risk,
            taskInput.tags
        );

        if (!newTask) return null;

        return newTask;
    }
}