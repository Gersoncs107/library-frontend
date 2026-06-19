import {useQuery} from '@apollo/client/react';
import {ALL_BOOKS} from '../queries';

const Recommendations = ({show, favoriteGenre}) => {
    const {loading, error, data} = useQuery(ALL_BOOKS);

    if (!show) {
        return null;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const books = data.allBooks;
    const recommendedBooks = books.filter(book => book.genres.includes(favoriteGenre));
    
     return (
    <div>
      <h2>recommendations</h2>
      <p>books in your favorite genre <strong>{favoriteGenre}</strong></p>
 
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {recommendedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recommendations;