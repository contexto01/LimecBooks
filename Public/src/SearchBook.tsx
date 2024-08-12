import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Book } from './types'
import Books from './components/Books'
import ReturnButton from './components/ReturnButton'

function SearchBook() {
  const [searchInput, setSearchInput] = useState('')
  const [addedBooks, setAddedBooks] = useState([])

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search')
    if (query) {
      setSearchInput(query)
      fetchBooks(query)
    } else {
      setSearchInput('')
      setAddedBooks([])
    }
  }, [location.search])

  const fetchBooks = (query: string) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+terms&maxResults=40&startIndex=0`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log('Books:', data)
        setAddedBooks(data.items)
        console.log('Added books:', addedBooks)
      })
  }

  const searchBooks = () => {
    navigate(`/books?search=${searchInput}`)
    fetchBooks(searchInput)
  }

  const HomePage = () => {
    navigate('/')
  }

  // const searchBooks = () => {
  //   console.log('searchBooks:', searchInput)
  //   // navigate(`/books/${searchInput}`)
  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${searchInput}+terms&maxResults=40&startIndex=0`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log('Books:', data)
  //       setAddedBooks(data.items)
  //       console.log('Added books:', addedBooks)
  //     })
  // }
  // const openModal = () => {
  //   console.log('Opening modal...')
  // }
  return (
    <article className="flex justify-center w-full flex-col mx-auto p-5">
      <ReturnButton />
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
          return <Books key={book.id} book={book} />
        })}
      </div>
    </article>
  )
}

export default SearchBook
