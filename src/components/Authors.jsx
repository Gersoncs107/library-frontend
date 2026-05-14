import { ALL_AUTHORS } from "../queries"
import { useQuery } from "@apollo/client/react"

const SetBirthYear = (props) => {
  return (
    <div>
      <h2>Set birthyear</h2>
      <form>
        <div>
          name
          <select>
            {props.authors.map((a) => (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          born
          <input />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default SetBirthYear

const Authors = (props) => {
  const { loading, error, data } = useQuery(ALL_AUTHORS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  if (!props.show) {
    return null
  }
  const authors = data.allAuthors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Authors
