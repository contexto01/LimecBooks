import { create } from 'zustand'
import { type BookBaseData, type FilterValue } from '../types'
import { addBook, removeBook } from './booksController'

interface BooksStore {
  books: BookBaseData[]
  loading: boolean
  filterSelected: FilterValue[]

  handleBookFilter: (filters: FilterValue[]) => void
  filterBooks: () => BookBaseData[]
  removeBook: (idBook: string) => void
  fetchBooks: () => void
  addBook: (book: BookBaseData) => void
  searchBook: (name: string) => void
}

export const useBooksStore = create<BooksStore>((set, get) => ({
  books: [],
  loading: true,
  filterSelected: [],
  filterBooks: () => {
    const { books, filterSelected } = get()
    if (filterSelected.length === 0) return books // If no filters are selected, return all books
    return books.filter(
      (book: BookBaseData) =>
        filterSelected.includes('all') ||
        filterSelected.some((filter) => book.categories.includes(filter))
    )
  },
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
  },
  searchBook: async (name: string) => {
    set({ loading: true })
    try {
      const response = await fetch(`https://limecbooks.onrender.com/api/books/${name}`)
      const data = await response.json()
      set({ books: data, loading: false })
    } catch (error) {
      console.error('Error fetching books:', error)
      set({ loading: false })
    }
  },
  handleBookFilter: (filters: FilterValue[]) => {
    set({ filterSelected: filters })
  }
}))
