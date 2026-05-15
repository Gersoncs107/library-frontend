import { useState } from "react"
import { EDIT_BORN } from "../queries"
import { useMutation } from "@apollo/client/react"

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