function NavBar() {
  return (
    <nav className="flex sm:justify-between justify-around flex-wrap items-baseline  px-5">
      <h1 className="text-2xl font-bold" data-aos="fade-down" data-aos-duration="300">
        📖LimecBooks
      </h1>
      {/* <ul className="flex gap-5 text-gray-500">
        <li>
          <button>Login</button>
        </li>
      </ul> */}
    </nav>
  )
}

export default NavBar
