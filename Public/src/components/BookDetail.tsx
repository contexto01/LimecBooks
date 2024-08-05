import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = useState<any>(null) // Puedes definir una interfaz específica para el libro

  const addBook = () => {
    fetch('https://limecbooks.onrender.com/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: volumeInfo.title,
        author: volumeInfo.authors[0],
        description: volumeInfo.description
      })
    })
  }

  const removeBook = () => {
    fetch('https://limecbooks.onrender.com/api/books', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    })
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
        onClick={() => removeBook()}
      >
        Quitar de la lista
      </button>
    </div>
  )
}

export default BookDetail
