import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBook from './SearchBook'
import Header from './header'
import Footer from './footer'
import BookDetail from './components/BookDetail'
import BooksAdded from './BooksAdded'
import HomePage from './HomePage'

function App() {
  return (
    <Router>
      <main className="max-w-screen-lg mt-5 mx-auto">
        <Header />
        <Routes>
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<SearchBook />} />
          <Route path="/booksadded" element={<BooksAdded />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
