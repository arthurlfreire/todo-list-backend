import { Router } from 'express'
import  createTodoController  from './controllers/createTodo.js'
import deleteTodoController from './controllers/deleteTodo.js'
import getTodosController from './controllers/getTodos.js'

export const router = Router()

const CreateTodo = new createTodoController()
const DeleteTodo = new deleteTodoController()
const GetTodos = new getTodosController()

router.post('/create', CreateTodo.handle)
router.delete('/delete', DeleteTodo.handle)
router.get('/todos', GetTodos.handle)