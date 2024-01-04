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
    async destroyTodo(todoId, userId) {
        const destroyedTodo = await dbContext.ToDo.findByIdAndDelete(todoId)
        if (destroyedTodo.creatorId.toString() != userId) {
            throw new Forbidden('not yours to delete')
        }
        await destroyedTodo.remove()
        return 'Todo has been deleted'
    }

}

export const toDoService = new ToDoService()