import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { toDoService } from "../services/ToDoService.js";
import { logger } from "../utils/Logger.js";

export class ToDoController extends BaseController {
    constructor() {
        super('api/todos')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getToDos)
            .post('', this.createToDo)
    }
    async getToDos(req, res, next) {
        try {
            const todoId = req.params.todoId
            const userId = req.userInfo.id
            const todos = await toDoService.getToDos(todoId)
            return res.send(todos)
        } catch (error) {
            next(error)
        }
    }
    async createToDo(req, res, next) {
        try {
            const data = req.body
            const userId = req.userInfo.id
            data.creatorId = userId
            logger.log('this is the back end', data)
            const toDoData = await toDoService.createToDo(data)
            return res.send(toDoData)
        } catch (error) {
            next(error)
        }
    }
}