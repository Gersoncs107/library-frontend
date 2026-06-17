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

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books