import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class ToDoService {
    async getToDos() {
        const todos = await dbContext.ToDo.find()
        return todos
    }
    async createToDo(data) {
        const toDo = await dbContext.ToDo.create(data)
        return toDo

    }
    async destroyTodo(todoId) {
        const destroyedTodo = await dbContext.ToDo.findByIdAndDelete(todoId)


        return 'Todo has been deleted'
    }

}

export const toDoService = new ToDoService()