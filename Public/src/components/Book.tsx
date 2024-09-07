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
  const DeleteBook = () => {
    fetch(`https://limecbooks.onrender.com/api/books/${book._id}`, {
      method: 'DELETE'
    })
    console.log(book._id)
  }
  return (
    <div
      key={book._id}
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
      <div>
        {/* <button>✏️</button> */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            removeBook(book._id)
          }}
        >
          ❌
        </button>
      </div>
    </div>
  )
}

export default Book
