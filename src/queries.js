import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      id
      name
      born
      bookCount
    }
  }
`

export const BOOK_DETAILS = gql`
  fragment BookDetails on Book {
    id
    title
    published
    genres
    author {
      name
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
  query allBooks($genre: String) {
    allBooks(genre: $genre) {
      ...BookDetails
    }
  }
`

export const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!, 
    $author: String!, 
    $published: Int!, 
    $genres: [String!]!
    ) {
    addBook(
      title: $title,
      author: $author,
      published: $published,
      genres: $genres
    ){
      id
      title
      author {
        name
      }
      published
      genres
    }
  }
`

export const EDIT_BORN = gql`
  mutation editBorn($name: String!, $setBornTo: Int!) {
    editAuthor(
      name: $name, 
      setBornTo: $setBornTo
      ) {
        name
        born
      }
  }
`

export const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      id
      title
      author {
        name
      }
      published
      genres
    }
  }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`

export const ME = gql`
  query {
    me {
      username
      favoriteGenre
      id
    }
  }
`