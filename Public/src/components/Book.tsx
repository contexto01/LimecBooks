import { BookBaseData } from '../types'
import { useBooksStore } from '../global/booksStore'

function Book({
  book,
  openModal
}: {
  book: BookBaseData
  openModal: (book: BookBaseData) => void
}) {
  const { removeBook } = useBooksStore((state) => ({
    removeBook: state.removeBook
  }))

  return (
    <div
      key={book.idBook}
      className="flex flex-col justify-between bg-slate-400 dark:bg-slate-800 hover:bg-opacity-50 transition-all p-4 bg-opacity-25 dark:bg-opacity-25 gap-y-4 rounded cursor-pointer"
      onClick={() => openModal(book)}
    >
      <h3 className="text-xl font-bold m-0">{book.title}</h3>
      <img
        src={book.img}
        alt={book.title}
        className="w-full h-48 object-cover object-top rounded-md"
      />
      <p className="text-muted-foreground">{book.author}</p>
      {book.categories.length > 0 && (
        <p className="p-0.5 bg-gray-300 dark:bg-gray-900  text-center rounded">
          {book.categories.join(', ')}
        </p>
      )}
      <div>
        {/* <button>✏️</button> */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            removeBook(book.idBook)
          }}
        >
          ❌
        </button>
      </div>
    </div>
  )
}

export default Book
