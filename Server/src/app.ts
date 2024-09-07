import express from 'express'
import router from './router/books'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI

// let db: Book[] = [] // Define db as an array of Book objects

app.use(morgan('dev'))
app.use(express.json())
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization'
  })
)

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

app.listen(port, () => {
  console.log('Server is running on port http://localhost:3000')
})
