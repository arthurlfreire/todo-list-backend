import { Todo } from '../mongo.js'

export default class createTodoService{
    async execute(request, response){
        const { text } = request.body
        const newTodo = new Todo({ text: text })

        try{
            await newTodo.save()
            response.status(200).send()
        }catch(err){
            console.log(err)
            response.status(400).send()
        }
    }
}









