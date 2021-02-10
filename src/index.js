import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const books = [
  {
    id: 'book1',
    title: 'Curves for the Mathematically Curious',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/51fr9AhktcL._SX329_BO1,204,203,200_.jpg',
    author: 'Julian Havil'
  },
  {
    id: 'book2',
    title: 'Schrodinger Equation',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41NooCklH9L._SX329_BO1,204,203,200_.jpg',
    author: 'Daniel A. Fleisch'
  }
]

function BookList() {
  const createBooks = (
    books.map((singleBook) => {
    return <Book key={singleBook.id} book={singleBook} />
  })
  )

  return(
    <section className="booklist">
      {createBooks}
    </section>
  )
}

const Book = (props) => {
  const { book } = props;
  return (
    <article className="book">
      <img src={book.imageSrc} alt="book cover" />
      <p className="title">{book.title}</p>
      <p className="author">{book.author}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));