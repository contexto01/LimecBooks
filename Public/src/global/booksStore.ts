import { create } from 'zustand'
import { BookBaseData } from '../types'
import { addBook } from './booksController'
// import { mocksBooks } from '../data/books'

interface BooksStore {
  books: BookBaseData[]
  loading: boolean
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
