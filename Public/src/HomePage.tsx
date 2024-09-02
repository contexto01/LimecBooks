import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  const SearchBook = () => {
    navigate('/books')
  }

  const BooksAdded = () => {
    navigate('/booksadded')
  }

  return (
    <article className="flex justify-center flex-col mt-10 mx-auto p-5">
      {/* <h2 className="text-3xl font-bold text-center">Bienvenido</h2> */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button onClick={SearchBook}>Buscar libros</button>
        <button onClick={BooksAdded}>Libros añadidos</button>
      </div>
    </article>
  )
}

export default HomePage
