import deleteTodoService from "../services/deleteTodo.js"

export default class deleteTodoController{
    async handle(request, response){
        const service = new deleteTodoService()
        service.execute(request, response)
    }
}