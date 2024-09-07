import { v4 as uuidv4 } from 'uuid'
import { mocksBooks } from '../data/books'
import { BookBaseData } from '../types'

const url = 'https://limecbooks.onrender.com/api/books'

export const addBook = (book: BookBaseData) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: book.title,
      author: book.author,
      description: book.description,
      img: book.img,
      idBook: uuidv4()
    })
  }).catch((error) => console.log(error))
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data)
  //   localStorage.setItem('books', JSON.stringify([...books, data]))
  // })
  return [...mocksBooks, book]
}

// export const removeBook = (idBook: string) => {
//   fetch(url, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       idBook: idBook
//     })
//   })
// }

// export const removeBook = (idBook: string) => {
//   const newBooks = books.filter((book) => book.idBook !== idBook)
//   localStorage.setItem('books', JSON.stringify(newBooks))
//   books.splice(books.indexOf(idBook), 1)
// }

// export const getBooks = () => {
//   const storedBooks = localStorage.getItem('books')
//   if (storedBooks) {
//     return JSON.parse(storedBooks)
//   }
//   return books
// }

// export const getBook = (idBook: string) => {
//   const storedBooks = localStorage.getItem('books')
//   if (storedBooks) {
//     return JSON.parse(storedBooks).find((book) => book.idBook === idBook)
//   }
//   return books.find((book) => book.idBook === idBook)
// }

// export const updateBook = (book: BookBaseData) => {
//   const newBooks = books.map((book) => {
//     if (book.idBook === book.idBook) {
//       return book
//     }
//     return book
//   })
//   localStorage.setItem('books', JSON.stringify(newBooks))
// }
