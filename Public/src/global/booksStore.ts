import { create } from 'zustand'
import { BookBaseData } from '../types'
import { addBook, removeBook } from './booksController'
// import { mocksBooks } from '../data/books'

interface BooksStore {
  books: BookBaseData[]
  loading: boolean
  removeBook: (idBook: string) => void
  fetchBooks: () => void
  addBook: (book: BookBaseData) => void
}

export const useBooksStore = create<BooksStore>((set) => ({
  books: [],
  addBook: (book: BookBaseData) => {
    addBook(book)
    set((state) => ({
      books: [...state.books, book]
    }))
  },
  removeBook: (idBook: string) => {
    removeBook(idBook)
    set((state) => ({
      books: state.books.filter((book) => book.idBook !== idBook)
    }))
  },
  // booksChange: () => {
  //   set({ books: mocksBooks })
  // }
  loading: true,
  fetchBooks: async () => {
    set({ loading: true })
    try {
      const response = await fetch('https://limecbooks.onrender.com/api/books')
      const data = await response.json()
      set({ books: data, loading: false })
    } catch (error) {
      console.error('Error fetching books:', error)
      set({ loading: false })
    }
  }
}))
