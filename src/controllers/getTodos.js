import getTodosService from "../services/getTodos.js"

export default class getTodosController{
    async handle(request, response){
        const service = new getTodosService()
        service.execute(request, response)
    }
}