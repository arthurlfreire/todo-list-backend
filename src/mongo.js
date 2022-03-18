import mongoose from 'mongoose'
import 'dotenv/config'

const { Schema, model } = mongoose

await mongoose.connect(process.env.MONGODB_URI).catch(err => console.log(err))

const todoSchema = new Schema({
    text: String
  })
export const Todo = model('Todo', todoSchema);