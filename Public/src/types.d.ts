export interface BookBaseData {
  // _id: string
  title: string
  author: string
  description: string
  img: string
  categories: string[]
  idBook: string
}

export type FilterValue = (typeof BOOK_FILTERS)[keyof typeof BOOK_FILTERS]

// export interface BookBaseData {
//   id: string
//   volumeInfo: {
//     title: string
//     authors: string[]
//     description: string
//     imageLinks: {
//       thumbnail: string
//     }
//   }
// }
