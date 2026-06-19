import {useState, useEffect} from 'react';import {useQuery} from '@apollo/client/react';
import {ALL_BOOKS} from '../queries';

const Recommendations = ({show, favoriteGenre}) => {
    const {loading, error, data} = useQuery(ALL_BOOKS);

    useEffect(() => {
        if (data) {
            setBooks(data.allBooks);
        }
    }, [data]);

    if (!show) {
        return null;
    }

    return (
        <div>
            <h2>Recommendations</h2>
            <p>Books in your favorite genre patterns: {favoriteGenre}</p>
            <ul>
                {books
                    .filter(book => book.genres.includes(favoriteGenre))
                    .map(book => (
                        <li key={book.id}>{book.title} by {book.author.name}</li>
                    ))}
            </ul>
        </div>
    );
}

export default Recommendations;