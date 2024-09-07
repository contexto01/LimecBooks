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

export const removeBook = (idBook: string) => {
  fetch(`https://limecbooks.onrender.com/api/books/${idBook}`, {
    method: 'DELETE'
  })
  console.log(idBook)
}