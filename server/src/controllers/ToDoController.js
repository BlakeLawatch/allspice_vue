import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { toDoService } from "../services/ToDoService.js";

export class ToDoController extends BaseController {
    constructor() {
        super('api/todos')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createToDo)
    }
    async createToDo(req, res, next) {
        try {
            const data = req.body
            const userId = req.userInfo.id
            data.creatorId = userId
            const toDoData = await toDoService.createToDo(data)
            return res.send(toDoData)
        } catch (error) {
            next(error)
        }
    }
}