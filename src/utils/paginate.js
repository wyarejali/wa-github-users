export const pageinate = (users, perPage) => {
  const page = Math.ceil(users.length / perPage)

  const newUsers = Array.from({ length: page }, (_, index) => {
    const start = index * perPage
    return users.slice(start, start + perPage)
  })
  return newUsers
}
