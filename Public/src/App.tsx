import { BrowserRouter as Router } from 'react-router-dom'
// import SearchBook from './SearchBook'
import Header from './header'
import Footer from './footer'
// import BookDetail from './components/BookDetail'
import BooksAdded from './BooksAdded'
// import HomePage from './HomePage'
import NavBar from './NavBar'

function App() {
  return (
    <Router>
      <main className="flex-1">
        <NavBar />
        <Header />
        <BooksAdded />
        {/* <Routes>
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<SearchBook />} />
          <Route path="/booksadded" element={<BooksAdded />} />
        </Routes> */}
      </main>
      <Footer />
    </Router>
  )
}

export default App
