import express, { Request, Response } from 'express'
import router from './router/books'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI

interface Book {
  id: string
  title: string
  author: string
  description: string
}

// let db: Book[] = [] // Define db as an array of Book objects

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/', router)

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error))
} else {
  console.error('Please set the MONGODB_URI environment variable', mongoUri)
  process.exit(1)
}

// app.get('/', (_req: Request, res: Response) => {
//   res.send(db)
// })

// app.post('/api/books', (req: Request, res: Response) => {
//   const book = req.body
//   db.push({
//     id: crypto.randomUUID(),
//     title: book.title,
//     author: book.author,
//     description: book.description
//   })
//   res.send(db)
// })

// app.get('/api/books', (_req: Request, res: Response) => {
//   res.send(db)
// })

// app.get('/api/books/:id', (req: Request, res: Response) => {
//   const id = req.params.id
//   const book = db.find((b) => b.id === id)
//   res.send(book)
// })

// app.put('/api/books/:id', (req: Request, res: Response) => {
//   const id = req.params.id
//   const book = req.body
//   const index = db.findIndex((b) => b.id === id)
//   db[index] = book
//   res.send(db)
// })

// app.delete('/api/books/:id', (req: Request, res: Response) => {
//   const id = req.params.id
//   const index = db.findIndex((b) => b.id === id)
//   db.splice(index, 1)
//   res.send(db)
// })

app.listen(port, () => {
  console.log('Server is running on port http://localhost:3000')
})
