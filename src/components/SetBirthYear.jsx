import { useState } from "react"
import { EDIT_BORN } from "../queries"
import { useMutation } from "@apollo/client/react"

const SetBirthYear = (props) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const [editBorn] = useMutation(EDIT_BORN)

  const submit = async (event) => {
    event.preventDefault()

    editBorn({
      variables: {
        name,
        born
      }
    })

    setBorn('')
  }

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
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