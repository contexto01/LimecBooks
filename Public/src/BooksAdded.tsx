import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BookBaseData } from './types'
import Modal from './components/BookDetail'
import { Toaster } from 'sonner'
import ModalAddBook from './components/ModalAddBook'
import Book from './components/Book'
import { useBooksStore } from './global/booksStore'
import FilterModal from './components/FilterModal'

function BooksAdded() {
  // const [booksAdded, setBooksAdded] = useState<BookBaseData[]>([])
  const [selectedBook, setSelectedBook] = useState<BookBaseData | null>(null)
  const [addBookModal, setAddBookModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    matchMedia('(prefers-color-scheme: dark)').matches
  )
  // const [isLoading, setIsLoading] = useState(true)
  // const { books, booksChange } = useBooksStore()
  const { loading, fetchBooks, filterBooks } = useBooksStore((state) => ({
    books: state.books,
    loading: state.loading,
    filterSelected: state.filterSelected,
    fetchBooks: state.fetchBooks,
    addBook: state.addBook,
    filterBooks: state.filterBooks,
    handleBookFilter: state.handleBookFilter
  }))

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    // Set initial state
    setIsDarkMode(mediaQuery.matches)

    // Add event listener
    mediaQuery.addEventListener('change', handleChange)

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // const openAddBookModal = () => setAddBookModal(true)

  const closeAddBookModal = () => setAddBookModal(false)

  // useEffect(() => {
  //   fetch('https://limecbooks.onrender.com/api/books')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIsLoading(false)
  //       setBooksAdded(data)
  //     })
  // }, [])

  const openModal = (book: BookBaseData) => setSelectedBook(book)

  const closeModal = () => setSelectedBook(null)
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  if (loading) {
    return (
      <SkeletonTheme
        baseColor={`${isDarkMode ? '#202020' : '#efefef'}`}
        highlightColor={`${isDarkMode ? '#444' : '#e0e0e0'}`}
      >
        <div className="flex justify-between items-baseline flex-wrap mb-5 md:p-4 w-full mx-auto">
          <h3>
            <Skeleton className="w-[258px] h-[36px]" />
          </h3>
          <div>
            <Skeleton className="w-[169px] h-[42px]" />
          </div>
        </div>
        <div className="flex gap-4 w-full justify-around flex-wrap">
          <div>
            <h3>
              <Skeleton className="w-[200px] h-[28px]" />
            </h3>
            <div>
              <Skeleton className="w-[212px] h-[192px]" />
            </div>
            <p className="mt-4">
              <Skeleton className="w-[200px] h-[22px]" />
            </p>
          </div>
          <div>
            <h3>
              <Skeleton className="w-[200px] h-[28px]" />
            </h3>
            <div>
              <Skeleton className="w-[212px] h-[192px]" />
            </div>
            <p className="mt-4">
              <Skeleton className="w-[200px] h-[22px]" />
            </p>
          </div>
          <div>
            <h3>
              <Skeleton className="w-[200px] h-[28px]" />
            </h3>
            <div>
              <Skeleton className="w-[212px] h-[192px]" />
            </div>
            <p className="mt-4">
              <Skeleton className="w-[200px] h-[22px]" />
            </p>
          </div>
          <div>
            <h3>
              <Skeleton className="w-[200px] h-[28px]" />
            </h3>
            <div>
              <Skeleton className="w-[212px] h-[192px]" />
            </div>
            <p className="mt-4">
              <Skeleton className="w-[200px] h-[22px]" />
            </p>
          </div>
        </div>
      </SkeletonTheme>
    )
  }

  return (
    <article className="md:p-4 w-full mx-auto mb-5">
      {!loading && (
        <section>
          <div
            className="flex justify-center sm:justify-between items-baseline flex-wrap gap-x-10 mb-5"
            data-aos="fade-down"
          >
            <h2 className="text-3xl font-bold text-center">Libros Disponibles</h2>
            <FilterModal />
            {/* <button onClick={openAddBookModal}>➕ Añadir libro</button> */}
          </div>
          <div className="grid w-full grid-cols-auto-fit-200 justify-items-center gap-4">
            {filterBooks().length === 0 ? (
              <p className="text-center text-lg text-gray-500">No hay libros disponibles.</p>
            ) : (
              filterBooks().map((book) => (
                <Book key={book.idBook} book={book} openModal={openModal} />
              ))
            )}
          </div>
        </section>
      )}

      <Toaster />
      <ModalAddBook isOpen={addBookModal} onClose={closeAddBookModal} />
      <Modal isOpen={!!selectedBook} onClose={closeModal} book={selectedBook} />
    </article>
  )
}

export default BooksAdded
