import { dbContext } from "../db/DbContext.js";


class ToDoService {
    async getToDos(userId) {
        const todos = await dbContext.ToDo.find({ creatorId: userId })
        return todos
    }
    async createToDo(data) {
        const toDo = await dbContext.ToDo.create(data)
        return toDo

    }
    async destroyTodo(todoId) {
        await dbContext.ToDo.findByIdAndDelete(todoId)


        return 'Todo has been deleted'
    }
    async editTodo(todoId) {
        const editedTodo = await dbContext.ToDo.findById(todoId)
        editedTodo.completed = !editedTodo.completed
        await editedTodo.save()
        return editedTodo
    }

}

export const toDoService = new ToDoService()