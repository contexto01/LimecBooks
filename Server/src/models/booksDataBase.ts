import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: false },
  idBook: { type: String, required: true },
  categories: [{ type: String, required: false }]
  // coso: { type: String, required: true }
})

// const Task = mongoose.model('Task', taskSchema)

export default mongoose.model('Book', BookSchema)
