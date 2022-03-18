import { Router } from 'express'
import  createTodoController  from './controllers/createTodo.js'
import deleteTodoController from './controllers/deleteTodo.js'

export const router = Router()

const CreateTodo = new createTodoController()
const DeleteTodo = new deleteTodoController()


router.post('/create', CreateTodo.handle)
router.delete('/delete', DeleteTodo.handle)