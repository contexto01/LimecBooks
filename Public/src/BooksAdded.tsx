import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BookBaseData } from './types'
import Modal from './components/BookDetail2'
import { Toaster } from 'sonner'
import ModalAddBook from './components/ModalAddBook'
import Book from './components/Book'

function BooksAdded() {
  const [booksAdded, setBooksAdded] = useState<BookBaseData[]>([])
  const [selectedBook, setSelectedBook] = useState<BookBaseData | null>(null)
  const [addBookModal, setAddBookModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const openAddBookModal = () => setAddBookModal(true)

  const closeAddBookModal = () => setAddBookModal(false)

  useEffect(() => {
    fetch('https://limecbooks.onrender.com/api/books')
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setBooksAdded(data)
      })
  }, [])

  const openModal = (book: BookBaseData) => setSelectedBook(book)

  const closeModal = () => setSelectedBook(null)

  return (
    <article className="md:p-4 w-full mx-auto mb-20">
      {isLoading && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="flex justify-between items-baseline flex-wrap mb-5">
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
            {/* <Skeleton className="w-44 h-56" />
          <Skeleton className="w-44 h-56" />
          <Skeleton className="w-44 h-56" />
          <Skeleton className="w-44 h-56" /> */}
          </div>
        </SkeletonTheme>
      )}

      {!isLoading && (
        <section>
          <div className="flex justify-center sm:justify-between items-baseline flex-wrap gap-x-10 mb-5">
            <h2 className="text-3xl font-bold text-center">Libros Disponibles</h2>
            <button onClick={openAddBookModal}>➕ Añadir libro</button>
          </div>
          <div className="grid w-full grid-cols-auto-fit-200 mb-14 gap-4">
            {booksAdded.map((book) => (
              <Book book={book} openModal={openModal} />
            ))}
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
