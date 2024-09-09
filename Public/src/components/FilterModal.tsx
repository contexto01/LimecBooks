import React, { useEffect, useState } from 'react'
import { useBooksStore } from '../global/booksStore'
import { FilterValue } from '../types'
import { FILTERS_BUTTONS, BOOK_FILTERS } from '../data/consts'

export default function FilterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)

  const { filterSelected, handleBookFilter, books } = useBooksStore((state) => ({
    filterSelected: state.filterSelected,
    handleBookFilter: state.handleBookFilter,
    books: state.books
  }))

  // Ensure 'all' is selected by default if no other filters are selected
  useEffect(() => {
    if (filterSelected.length === 0 && !isFilterSelected('all')) {
      handleBookFilter([BOOK_FILTERS.all])
    }
  }, [filterSelected, handleBookFilter])

  // Handle filter click
  const handleClickFilter =
    (filter: FilterValue) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked
      if (isChecked) {
        handleBookFilter([...filterSelected, filter])
      } else {
        handleBookFilter(filterSelected.filter((f) => f !== filter))
      }
    }

  // Obtain all unique categories present in books
  const allCategories = new Set<string>()
  books.forEach((book) => book.categories.forEach((category) => allCategories.add(category)))

  // Create a list of filters combining existing filters and found categories
  const combinedFilters = new Map(Object.entries(FILTERS_BUTTONS))

  // Add found categories that are not in the existing filters
  allCategories.forEach((category) => {
    if (!combinedFilters.has(category)) {
      combinedFilters.set(category, { literal: category, href: '#', icon: '📖' })
    }
  })

  // Check if a filter is selected
  const isFilterSelected = (key: string) => {
    return filterSelected.includes(key) || (key === 'all' && filterSelected.length === 0)
  }

  // Display filters with at least one book
  const filterEntries = Array.from(combinedFilters.entries()).filter(([key]) => {
    const count = books.filter((book) => book.categories.includes(key)).length
    return count > 0
  })

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
          Categoría
        </h6>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <input
              id="all"
              type="checkbox"
              value="all"
              checked={isFilterSelected('all')}
              onChange={handleClickFilter('all')}
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="all"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
            >
              Todos 📚 ({books.length})
            </label>
          </li>
          {filterEntries.map(([key, { literal, icon }]) => {
            const count = books.filter((book) => book.categories.includes(key)).length
            return (
              <li key={key} className="flex items-center">
                <input
                  id={key}
                  type="checkbox"
                  value={key}
                  checked={isFilterSelected(key)}
                  onChange={handleClickFilter(key)}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={key}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
                >
                  {literal} {icon} ({count})
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
