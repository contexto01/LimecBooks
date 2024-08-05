import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Article from './article'
import Header from './header'
import Footer from './footer'
import BookDetail from './components/BookDetail'

function App() {
  return (
    <Router>
      <main className="max-w-screen-lg mt-5 mx-auto">
        <Header />
        {/* <Article /> */}
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
