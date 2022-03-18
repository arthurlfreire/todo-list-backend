import { Todo } from '../mongo.js'

export default class getTodosService{
    async execute(request, response){
        try{
            const todos = await Todo.find({})
            response.status(200).json(todos)
        }catch(err){
            console.log(err)
            response.status(400).send()
        }
    }
}