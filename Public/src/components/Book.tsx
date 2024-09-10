import { BookBaseData } from '../types'
// import { useBooksStore } from '../global/booksStore'

function Book({
  book,
  openModal
}: {
  book: BookBaseData
  openModal: (book: BookBaseData) => void
}) {
  // const { removeBook } = useBooksStore((state) => ({
  //   removeBook: state.removeBook
  // }))
  return (
    <div
      key={book.idBook}
      className="flex flex-col z-10 bg-slate-300 dark:bg-slate-700 hover:bg-opacity-50 transition-all p-4 bg-opacity-25 dark:bg-opacity-25 gap-y-4 rounded cursor-pointer max-w-[250px] w-full"
      onClick={() => openModal(book)}
      data-aos="fade-up"
    >
      <img
        // src={book.img ?? 'https://placehold.co/600x400?text=Hello+World'}
        src={book.img === ' ' ? `https://placehold.co/400x400?text=${book.title}` : book.img}
        alt={book.title}
        className="w-full h-56 object-cover object-top rounded-md"
      />
      <h3 className="font-bold m-0 truncate">{book.title}</h3>
      <p className="text-muted-foreground text-sm overflow-hidden text-ellipsis whitespace-nowrap">
        {book.author}
      </p>
      {book.categories.length > 0 && (
        <p className="p-0.5 bg-gray-300 dark:bg-gray-900 text-center rounded">
          {book.categories.join(', ')}
        </p>
      )}

      {book.categories.length === 0 && (
        <p className="p-0.5 bg-gray-300 dark:bg-gray-900 text-center rounded">No categoría</p>
      )}
      <div>
        {/* <button>✏️</button> */}
        {/* <button
          onClick={(e) => {
            e.stopPropagation()
            removeBook(book.idBook)
          }}
        >
          ❌
        </button> */}
      </div>
    </div>
  )
}

export default Book
