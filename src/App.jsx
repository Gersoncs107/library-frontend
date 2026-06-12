import { useState } from 'react'
import { useApolloClient, useQuery } from '@apollo/client/react'
import Authors from './components/Authors'
import SetBirthYear from './components/SetBirthYear'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('library-user-token'))
  const [page, setPage] = useState('authors')
  const client = useApolloClient()

  const onLogout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }
  // If the user is not logged in, show the login form

  if (!token) {
    return (
      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
        </div>
        <Authors show={page === 'authors'} />
        <Books show={page === 'books'} />
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
        <button onClick={onLogout}>logout</button>
      </div>      

      <Authors show={page === 'authors'} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} />
    </div>
  )
}

export default App
