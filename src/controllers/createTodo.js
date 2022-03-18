import { Todo } from '../mongo.js'
import createTodoService from '../services/createTodo.js'

export default class createTodoController{
    async handle(request, response){
        const service = new createTodoService()
        service.execute(request, response)
    }
}