import { useNavigate } from 'react-router-dom'
import { Book } from '../types'

function Books({ book }: { book: Book }) {
  const { volumeInfo } = book // Desestructurar aquí
  const placeholderImage = `https://via.placeholder.com/300x450.png?text=${volumeInfo?.title}`
  const navigate = useNavigate()
  return (
    <div
      key={book.id}
      className=" p-2 flex flex-col justify-between cursor-pointer"
      onClick={() => navigate(`/book/${book.id}`)}
    >
      <img
        src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : placeholderImage}
        className="w-full min-h-72 max-h-72 object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1 h-8">
        <h3 className="m-0 my-4 font-bold text-lg leading-tight">{volumeInfo.title}</h3>
        <p className="text-gray-300 text-sm">{volumeInfo.authors}</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver mas
                </button> */}
      </div>
      {/* `authors` es probablemente un array */}
      {/* <p>Description: {volumeInfo.description}</p> */}
    </div>
  )
}

export default Books
