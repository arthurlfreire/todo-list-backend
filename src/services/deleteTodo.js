import { Todo } from '../mongo.js'

export default class deleteTodoService{
    async execute(request, response){
        const { text } = request.body
        try{
            await Todo.findOneAndDelete({text: text})
            const todos = await Todo.find({})
            response.status(200).json(todos)
        }catch(err){
            console.log(err)
            response.status(400).json(todos)
        }

    }
}