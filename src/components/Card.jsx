import React from 'react'

const Card = (user) => {
  const { login, avatar_url, html_url, repos_url } = user

  return (
    <div className='card'>
      <img src={avatar_url} alt={login} />
      <div className='flex-between flex-1'>
        <div className='info'>
          <h3 style={{ textTransform: 'capitalize' }}>{login}</h3>
          <h5>
            <a target='_blank' rel='noreferrer' href={repos_url}>
              Repository
            </a>
          </h5>
        </div>
        <div className='more-info'>
          <a
            className='details-button'
            target='_blank'
            rel='noreferrer'
            href={html_url}
          >
            Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
