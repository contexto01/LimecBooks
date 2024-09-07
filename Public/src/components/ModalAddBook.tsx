import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'sonner'
// import { addBook } from '../global/booksController'
import { useBooksStore } from '../global/booksStore'
// import exp from 'constants'

const ModalAddBook = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [values, setValues] = useState({
    title: '',
    author: '',
    description: ''
  })
  const { books, addBook } = useBooksStore((state) => ({
    books: state.books,
    addBook: state.addBook
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Añadiendo el libro a la lista', {
      description: values.title,
      icon: <p>✅</p>
    })
    setValues({
      title: '',
      author: '',
      description: ''
    })
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${values.title}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        addBook({
          title: data.items[0].volumeInfo.title,
          author: data.items[0].volumeInfo.authors[0].displayName,
          description: data.items[0].volumeInfo.description,
          img: data.items[0].volumeInfo.imageLinks.thumbnail,
          idBook: uuidv4()
        })
      })
      .catch((err) => {
        console.log(err)
      })

    console.log(books)
    onClose()
  }

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className=" flex gap-4 flex-col flex-wrap sm:flex-nowrap backdrop-blur-md dark:bg-black bg-white bg-opacity-70 p-8 rounded-lg w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold">
          {' '}
          &times;{' '}
        </button>
        <h3 className="text-2xl font-bold mb-4">Añadir libro</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            className="border-2 border-gray-300 rounded-lg p-2"
            value={values.title}
            name="title"
            onChange={handleChange}
            autoFocus
          />
          {/* <label htmlFor="author">Autor</label>
          <input
            type="text"
            id="author"
            name="author"
            value={values.author}
            className="border-2 border-gray-300 rounded-lg p-2"
            onChange={handleChange}
          />
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            className="border-2 border-gray-300 rounded-lg p-2"
            value={values.description}
            name="description"
            onChange={handleChange}
          ></textarea> */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Añadir libro
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModalAddBook
