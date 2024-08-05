async function searchBooks() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase()

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
    )
    const data = await response.json()

    const searchResultsDiv = document.getElementById('searchResults')
    searchResultsDiv.innerHTML = ''

    data.items.forEach((item) => {
      const volumeInfo = item.volumeInfo

      const div = document.createElement('div')
      div.classList.add('book')
      div.innerHTML = `
        <div class="containerImg">
          <img src="${
            volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'No image available'
          }" alt="Book Cover"/>
        </div>

        <div class="book-content">
          <h3>${volumeInfo.title}</h3>
          <p>Author: ${volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
          <p>Description: ${
            volumeInfo.description ? volumeInfo.description : 'No description available'
          }</p>
          <button onclick="openModal('${volumeInfo.title}', '${
        volumeInfo.description || ''
      }')">View Details</button>
        </div>
      `
      searchResultsDiv.appendChild(div)
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
const bookDetailsDialog = document.getElementById('bookDetailsDialog')
const addBookForm = document.getElementById('addBookForm')
const addedBooksContainer = document.getElementById('addedBooks')

function openModal(title, author, description) {
  const modalTitle = document.getElementById('modalTitle')
  const modalContent = document.getElementById('modalContent')

  modalTitle.textContent = title
  modalContent.innerHTML = `
    <h3>Añade un libro a tu lista de libros favoritos.</h3> <br/>
  `

  // Mostrar el dialog usando showModal()
  bookDetailsDialog.showModal()
}

function closeModal() {
  // Cerrar el dialog usando close()
  bookDetailsDialog.close()
}

async function loadAddedBooks() {
  try {
    const response = await fetch('https://limecbooks.onrender.com/api/books')
    const data = await response.json()
    console.log('Books loaded:', data)

    // Limpiar el contenedor antes de agregar libros
    addedBooksContainer.innerHTML = ''

    // Mostrar cada libro añadido
    data.forEach((book) => {
      const addedBookDiv = document.createElement('div')
      addedBookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Description: ${book.description}</p>
      `
      addedBooksContainer.appendChild(addedBookDiv)
    })
  } catch (error) {
    console.error('Error loading added books:', error)
  }
}

// Llamar a la función para cargar libros añadidos al inicio
loadAddedBooks()

async function addBook(event) {
  event.preventDefault() // Evitar el envío del formulario por defecto

  const formData = new FormData(addBookForm)
  const title = formData.get('title')
  const author = formData.get('author')
  const description = formData.get('description')

  try {
    const response = await fetch(`https://limecbooks.onrender.com/api/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        author: author,
        description: description
      })
    })
    const data = await response.json()
    console.log('Book added to cart:', data)

    // Mostrar el libro añadido en la lista
    const addedBookDiv = document.createElement('div')
    addedBookDiv.innerHTML = `
      <h3>${title}</h3>
      <p>Author: ${author}</p>
      <p>Description: ${description}</p>
    `
    addedBooksContainer.appendChild(addedBookDiv)

    closeModal() // Cierra el dialog después de agregar el libro
    // Aquí podrías añadir lógica adicional como actualizar la UI después de agregar el libro
  } catch (error) {
    console.error('Error adding book to cart:', error)
  }
}
