import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { toDoService } from '../services/ToDoService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/todos', this.getToDos)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getToDos(req, res, next) {
    try {
      const userId = req.userInfo.id
      const todos = await toDoService.getToDos(userId)
      return res.send(todos)
    } catch (error) {
      next(error)
    }
  }
}
