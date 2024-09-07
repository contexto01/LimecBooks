import { useEffect, useState } from 'react'
import { BookBaseData } from '../types'

export const mocksBooks: BookBaseData[] = []

export const useFetchBooks = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://limecbooks.onrender.com/api/books')
        const data = await response.json()
        mocksBooks.push(...data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData().catch((error) => {
      console.error(error)
      setLoading(false)
    })
  }, [])
  return loading
}
