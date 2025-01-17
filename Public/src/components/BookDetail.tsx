import { BookBaseData } from '../types'

function Modal({
  isOpen,
  onClose,
  book
}: {
  isOpen: boolean
  onClose: () => void
  book: BookBaseData | null
}) {
  if (!isOpen || !book) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className=" flex gap-4 flex-wrap sm:flex-nowrap backdrop-blur-md dark:bg-black bg-white bg-opacity-70 p-8 rounded-lg w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="fixed top-4 right-4 text-2xl font-bold">
          &times;
        </button>
        <img
          src={book.img === ' ' ? `https://placehold.co/400x400?text=${book.title}` : book.img}
          alt={book.title}
          className="w-full  max-w-[50%] mx-auto my-auto sm:max-w-[30%] sm:h-96 object-cover object-center rounded-backdrop-blur-sm mb-4"
        />
        {/* <div className="w-full h-96 bg-black"></div> */}
        <div>
          <h3 className="text-2xl font-bold mb-4">{book.title}</h3>
          <p className="text-lg mb-4">{book.author}</p>
          {book.categories.map((category) => (
            <p className="p-2 bg-gray-300 dark:bg-gray-900  text-center rounded mb-2 inline-block">
              {category}
            </p>
          ))}
          {book.categories.length === 0 && (
            <p className="p-0.5 bg-gray-300 dark:bg-gray-900 text-center rounded mb-2">
              No categoría
            </p>
          )}
          {/* <p>{book.description}</p> */}
          {book.description.length > 0 && (
            <p className="text-justify mb-4">{book.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
