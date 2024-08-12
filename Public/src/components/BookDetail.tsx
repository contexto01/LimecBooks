import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Book } from '../types'

const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = useState<Book | null>(null) // Puedes definir una interfaz específica para el libro

  const addBook = () => {
    fetch('https://limecbooks.onrender.com/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: volumeInfo.title,
        author: volumeInfo.authors[0],
        description: volumeInfo.description,
        img: volumeInfo.imageLinks?.thumbnail,
        idBook: id
      })
    }).catch((error) => console.log(error))
  }

  const removeBook = ({ id }: any) => {
    // fetch(${"https://limecbooks.onrender.com/api/books"}, {
    //   method: 'DELETE'})
    fetch(`https://limecbooks.onrender.com/api/books/${id}`, {
      method: 'DELETE'
    })
    console.log(id)
  }

  useEffect(() => {
    // Obtener los detalles del libro usando la API
    const fetchBookDetails = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      const data = await response.json()
      setBook(data)
    }

    fetchBookDetails()
  }, [id])

  if (!book) return <div>Cargando...</div>

  const { volumeInfo } = book

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl">{volumeInfo.title}</h2>
      <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} className="mt-4" />
      <p>{volumeInfo.description}</p>
      <p>
        <strong>Authors:</strong> {volumeInfo.authors.join(', ')}
      </p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => addBook()}
      >
        Añadir a la lista
      </button>
      <button
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => removeBook({ id })}
      >
        Quitar de la lista
      </button>
    </div>
  )
}

export default BookDetail
