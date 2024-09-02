import { useState } from 'react'

function Header() {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(searchInput)
  }
  return (
    <header className="flex py-3 px-5 gap-4 justify-around items-center sm:flex-row flex-col-reverse sm:flex-nowrap flex-wrap">
      <div className="max-w-[400px] flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Descubre tu próxima lectura
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Busque en nuestra amplia biblioteca y encuentre el libro perfecto para sus
          necesidades. LimecBooks le permite explorar y acceder fácilmente a los recursos que
          necesita.
        </p>
        <div className="flex gap-2 flex-wrap mt-72">
          <input
            type="text"
            id="searchInput"
            placeholder="Busca tu libro..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>
      <img
        src="https://scontent.fclo5-1.fna.fbcdn.net/v/t39.30808-6/300774708_414172600806952_7466789840785667294_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFJPNhePApibNNJs61GO_vN2xyWrepO2ErbHJat6k7YSmjqVZduxHo5UCvFoqmz7RTXY-cHFj-BTXMJna9a2D2e&_nc_ohc=kEuQ6gtpcrMQ7kNvgHvPe6X&_nc_ht=scontent.fclo5-1.fna&_nc_gid=AF47nhpCPjRHR8DsFk5XAuF&oh=00_AYBVmyipF2A2xUl54tmKQk7eTmxHoxoDNG9LpyMXvJFTMA&oe=66D84309"
        alt="logo"
        className="w-2/4 h-2/4 max-w-[400px] max-h-[400px] min-w-[200px] min-h-[200px] rounded-full filter drop-shadow-lg"
      />
    </header>
  )
}

export default Header
