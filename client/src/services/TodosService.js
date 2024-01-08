import { AppState } from "../AppState"
import { ToDos } from "../models/ToDos"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import Pop from '../utils/Pop';

class TodosService {

    async getTodos() {
        const res = await api.get(`api/todos`)
        AppState.todos = res.data.map(pojo => new ToDos(pojo))
        // logger.log('got todos FINISH IN THE SERVICE', res.data)

    }

    async createTodo(data) {
        const res = await api.post(`api/todos`, data)
        const newTodo = new ToDos(res.data)
        AppState.todos.push(newTodo)
        return newTodo
    }

    async destroyTodo(todoId) {
        const wantsToDelete = await Pop.confirm('You sure about that?')
        if (!wantsToDelete) {
            return
        }
        const res = await api.delete(`api/todos/${todoId}`)
        const index = AppState.todos.findIndex(todo => todo.id == todoId)
        if (index > -1) {
            AppState.todos.splice(index, 1)
        }
        logger.log('destroyed data FINISH IN THE SERVICE', res.data)
    }

    async completeTask(data, todoId) {
        const res = await api.put(`api/todos/${todoId}`, data)
        logger.log('updated FINISH IN THE SERVICE', res.data)
    }
}

export const todosService = new TodosService()