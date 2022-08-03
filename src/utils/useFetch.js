import { useEffect, useState } from 'react'
import { pageinate } from './paginate'
const url = 'https://api.github.com/users?per_page=100'

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(pageinate(data, 9))
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return { isLoading, data }
}
