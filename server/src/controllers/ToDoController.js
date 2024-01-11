import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { toDoService } from "../services/ToDoService.js";
import { logger } from "../utils/Logger.js";

export class ToDoController extends BaseController {
    constructor() {
        super('api/todos')
        this.router
            .get('', this.getToDos)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createToDo)
            .delete('/:todoId', this.destroyTodo)
            .put('/:todoId', this.editTodo)
    }
    async getToDos(req, res, next) {
        try {
            // const todoId = req.params.id
            // const userId = req.userInfo.id
            const todos = await toDoService.getToDos()
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
    async destroyTodo(req, res, next) {
        try {
            const todoId = req.params.todoId
            const destroyedTodo = await toDoService.destroyTodo(todoId)
            return res.send(destroyedTodo)
        } catch (error) {
            next(error)
        }
    }
    async editTodo(req, res, next) {
        try {
            const todoId = req.params.todoId
            // const userInfo = req.body
            const editedTodo = await toDoService.editTodo(todoId)
            return res.send(editedTodo)
        } catch (error) {
            next(error)
        }
    }




}