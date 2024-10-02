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
      const books = data.map((book) => ({
        idBook: book.idBook,
        title: book.title,
        author: book.author,
        description: book.description,
        img: book.img,
        categories: book.categories,
        avalible: true
      }))
      set({ books: books, loading: false })
    } catch (error) {
      console.error('Error fetching books:', error)
      set({ loading: false })
    }
  },
  searchBook: async (name: string) => {
    set({ loading: true })
    try {
      // Primer petición a LimecBooks
      if (name === '') {
        const allBooksResponse = await fetch('https://limecbooks.onrender.com/api/books')
        if (!allBooksResponse.ok) {
          throw new Error(`Error: ${allBooksResponse.status} ${allBooksResponse.statusText}`)
        }
        const allBooksData: BookBaseData[] = await allBooksResponse.json()
        const books = allBooksData.map((book) => ({
          idBook: book.idBook,
          title: book.title,
          author: book.author,
          description: book.description,
          img: book.img,
          categories: book.categories,
          avalible: true
        }))
        set({ books: books, loading: false })
        return
      }
      const limecResponse = await fetch(`https://limecbooks.onrender.com/api/books/${name}`)

      let limecData: BookBaseData[] = []
      // Si hay un error 404, podemos ignorar el resultado
      if (limecResponse.ok) {
        limecData = await limecResponse.json()
      } else if (limecResponse.status !== 404) {
        throw new Error(`Error: ${limecResponse.status} ${limecResponse.statusText}`)
      } else {
        console.warn('No books found in LimecBooks for the search term:', name)
      }

      // Segundo petición a Google Books
      const googleResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${name}`
      )
      if (!googleResponse.ok) {
        throw new Error(`Error: ${googleResponse.status} ${googleResponse.statusText}`)
      }
      const googleData = await googleResponse.json()

      // Combinar los libros de ambas APIs
      const combinedBooks: BookBaseData[] = [
        ...limecData.map((book) => ({
          idBook: book.idBook,
          title: book.title,
          author: book.author,
          description: book.description,
          img: book.img,
          categories: book.categories,
          avalible: true
        })),
        ...(googleData.items || []).map((item) => ({
          idBook: item.id, // O cualquier otro campo único que puedas usar
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
          description: item.volumeInfo.description || 'No description available.',
          img: item.volumeInfo.imageLinks?.thumbnail || '',
          categories: item.volumeInfo.categories || [],
          avaliable: false
        }))
      ]
      set({ books: combinedBooks, loading: false })
    } catch (error) {
      console.error('Error fetching books:', error)
      set({ books: [], loading: false })
    }
  },
  handleBookFilter: (filters: FilterValue[]) => {
    set({ filterSelected: filters })
  }
}))
