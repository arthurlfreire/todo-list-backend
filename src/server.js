import express from 'express'
import { router } from './routes.js'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, ()=> console.log("Server is up and running at port 3000."))