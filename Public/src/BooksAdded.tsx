import ReturnButton from './components/ReturnButton'

function BooksAdded() {
  return (
    <article className="flex justify-center w-full flex-col mx-auto p-5">
      <h2 className="text-3xl font-bold text-center">Libros añadidos</h2>
      <ReturnButton />
    </article>
  )
}

export default BooksAdded
