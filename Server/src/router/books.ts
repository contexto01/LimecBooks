import express from 'express'
import BookSchema from '../models/booksDataBase'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Hello World!')
})

router.get('/api/books', async (_req, res) => {
  const books = await BookSchema.find({})
  res.json(books)
})

router.post('/api/books', async (req, res) => {
  const book = new BookSchema({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    status: req.body.status,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const id = uuidv4()
  book.id = id
  await book.save()
  res.json(book)
})

router.get('/api/books/:id', async (req, res) => {
  const book = await BookSchema.findById(req.params.id)
  res.json(book)
})

router.put('/api/books/:id', async (req, res) => {
  const book = await BookSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  res.json(book)
})

router.delete('/api/books/:id', async (req, _res) => {
  await BookSchema.findByIdAndDelete(req.params.id)
})

// delete all books
router.delete('/api/books', async (_req, _res) => {
  await BookSchema.deleteMany({})
})

export default router
