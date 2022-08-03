import React, { useEffect, useState } from 'react'
import { useFetch } from '../utils/useFetch'
import Card from './Card'

const Users = () => {
  const { isLoading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (isLoading) return
    setUsers(data[page])
  }, [page, isLoading, data])

  const handlePage = (page) => {
    setPage(page)
  }

  // Previous page method
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1

      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }
  // Next page method
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1

      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  if (isLoading) {
    return (
      <div className='app-github-users'>
        <div className='container'>
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className='app-github-users'>
      <div className='container'>
        <h1>GitHub Users</h1>
        <div className='card-wrapper'>
          {users.map((user) => {
            return <Card key={user.id} {...user} />
          })}
        </div>

        <div className='pagination'>
          <button className='page page-prev' onClick={prevPage}>
            Prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page ${index === page ? 'active' : ''}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            )
          })}
          <button className='page page-next' onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Users
