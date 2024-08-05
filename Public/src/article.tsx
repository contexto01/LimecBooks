import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Book {
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    description: string
    imageLinks: {
      thumbnail: string
    }
  }
}

function Article() {
  const [searchInput, setSearchInput] = useState('')
  const [addedBooks, setAddedBooks] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    console.log('addedBooks:', addedBooks)
  }, [addedBooks])
  const searchBooks = () => {
    console.log('searchBooks:', searchInput)
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchInput}+terms&maxResults=40&startIndex=0`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log('Books:', data)
        setAddedBooks(data.items)
        console.log('Added books:', addedBooks)
      })
  }
  // const openModal = () => {
  //   console.log('Opening modal...')
  // }
  return (
    <article className="flex justify-center w-full flex-col mx-auto p-5">
      <div className="flex justify-center">
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchBooks}>Search</button>
      </div>
      <div id="searchResults"></div>
      {/* <button onClick={openModal}>+ Añadir libro</button> */}
      <div id="addedBooks" className="grid w-full grid-cols-auto-fit-200 mb-14 gap-4">
        {addedBooks.map((book: Book) => {
          const { volumeInfo } = book // Desestructurar aquí
          const placeholderImage = `https://via.placeholder.com/300x450.png?text=${volumeInfo?.title}`
          return (
            <div
              key={book.id}
              className=" p-2 flex flex-col justify-between cursor-pointer"
              onClick={() => navigate(`/books/${book.id}`)}
            >
              <img
                src={
                  volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : placeholderImage
                }
                className="w-full min-h-72 max-h-72 object-cover rounded-lg"
              />
              <div className="flex flex-col flex-1 h-8">
                <h3 className="m-0 my-4 font-bold text-lg leading-tight">
                  {volumeInfo.title}
                </h3>
                <p className="text-gray-300 text-sm">{volumeInfo.authors}</p>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver mas
                </button> */}
              </div>
              {/* `authors` es probablemente un array */}
              {/* <p>Description: {volumeInfo.description}</p> */}
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Article
