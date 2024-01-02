import { dbContext } from "../db/DbContext.js";

class ToDoService {
    async createToDo(data) {
        const toDo = await dbContext.ToDo.create(data)
        return toDo

    }

}

export const toDoService = new ToDoService()