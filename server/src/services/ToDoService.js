import { dbContext } from "../db/DbContext.js";

class ToDoService {
    async getToDos(todoId) {
        const todos = await dbContext.ToDo.find(todoId)
        return todos
    }
    async createToDo(data) {
        const toDo = await dbContext.ToDo.create(data)
        return toDo

    }

}

export const toDoService = new ToDoService()