import { useState } from 'react'
import { useBooksStore } from './global/booksStore'

function Header() {
  const { searchBook } = useBooksStore((state) => ({
    searchBook: state.searchBook
  }))
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchBook(searchInput)
    console.log(searchInput)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchInput = e.target.value
    if (newSearchInput.startsWith(' ')) return
    setSearchInput(e.target.value)
  }

  return (
    <header className="flex py-3 px-5 gap-4 justify-around items-center sm:flex-row flex-col-reverse sm:flex-nowrap flex-wrap">
      <div className="max-w-[400px] flex flex-col space-y-4">
        <h1
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
          data-aos="fade-right"
          data-aos-duration="300"
        >
          Descubre tu próxima lectura
        </h1>
        <p
          className="max-w-[600px] text-muted-foreground md:text-xl"
          data-aos="fade-right"
          data-aos-duration="400"
        >
          Busque en nuestra amplia biblioteca y encuentre el libro perfecto para sus
          necesidades. LimecBooks le permite explorar y acceder fácilmente a los recursos que
          necesita.
        </p>

        <form className="flex gap-2 flex-wrap mt-72" onSubmit={handleSubmit}>
          <input
            type="text"
            id="searchInput"
            placeholder="Busca tu libro..."
            value={searchInput}
            onChange={handleChange}
            data-aos="fade-up"
            data-aos-duration="400"
          />
          <button type="submit" data-aos="fade-up" data-aos-duration="400">
            Buscar
          </button>
        </form>
      </div>
      <img
        src="/LIMECICOHEADER.jfif"
        alt="logo"
        className="w-2/4 h-2/4 max-w-[400px] max-h-[400px] min-w-[200px] min-h-[200px] rounded-full filter drop-shadow-lg"
        data-aos="fade-left"
        data-aos-duration="300"
      />
    </header>
  )
}

export default Header
