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

router.get('/api/books/:name', async (req, res) => {
  try {
    const { name } = req.params // Obtener el nombre del libro desde los parámetros de la URL

    // Asegurarse de que el nombre no sea vacío
    if (!name || name.trim() === '') {
      return res.status(400).json({ message: 'El parámetro de búsqueda no puede estar vacío' })
    }

    // Buscar libros que coincidan parcialmente con el nombre proporcionado
    const books = await BookSchema.find({ title: { $regex: new RegExp(name, 'i') } })

    if (books.length === 0) {
      return res.status(404).json({ message: 'No se encontraron libros con ese nombre' })
    }

    res.json(books)
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar libros', error })
  }
})

router.post('/api/books', async (req, res) => {
  const book = new BookSchema({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    img: req.body.img,
    idBook: req.body.idBook,
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
  // await BookSchema.deleteOne({ idBook: req.params.id })
})

// delete all books
router.delete('/api/books', async (_req, _res) => {
  await BookSchema.deleteMany({})
})

export default router
