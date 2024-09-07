import { useState } from 'react'

export default function FilterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)

  const categories = [
    { id: 'apple', name: 'Apple', count: 56 }
    // Añade más categorías aquí
  ]

  return (
    <div className="relative flex items-center justify-center p-4">
      <button
        onClick={toggleModal}
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        Filtrar por categoría
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        className={`absolute top-14 mt-2 right-0 w-56 p-3 rounded-lg shadow bg-slate-400 dark:bg-slate-900 backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <h6 className="mb-3 mt-0 text-sm font-medium text-gray-900 dark:text-white">
          Categorias
        </h6>
        <ul className="space-y-2 text-sm">
          {categories.map((category) => (
            <li key={category.id} className="flex items-center">
              <input
                id={category.id}
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={category.id}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                {category.name} ({category.count})
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
