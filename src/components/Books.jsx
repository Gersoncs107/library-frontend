import { useState } from "react"
import { ALL_BOOKS } from "../queries"
import { useQuery } from "@apollo/client/react"

const Books = (props) => {
  const [selectedGenre, setSelectedGenre] = useState(null)
  const { loading, error, data } = useQuery(ALL_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  if (!props.show) {
    return null
  }

  const books = data.allBooks

  const genres = ['all genres', ...new Set(books.flatMap((b) => b.genres))]

  const filteredBooks = selectedGenre && selectedGenre !== 'all genres'
    ? books.filter((b) => b.genres.includes(selectedGenre))
    : books

  return (
    <div>
      <h2>books</h2>

      {selectedGenre && selectedGenre !== 'all genres' && (
        <p>in genre <strong>{selectedGenre}</strong></p>
      )}

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {filteredBooks.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{ fontWeight: selectedGenre === genre ? 'bold' : 'normal' }}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Books