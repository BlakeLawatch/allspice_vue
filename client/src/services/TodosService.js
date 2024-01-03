import { AppState } from "../AppState"
import { ToDos } from "../models/ToDos"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

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
}

export const todosService = new TodosService()