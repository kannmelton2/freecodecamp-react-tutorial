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
      // using the spread operator here means we are changing the way we send the book object,
      // we are sending its properties, and we have no need to use `book.propertyName`
      // look down at Book component beginning on line 38 to see
    return <Book key={singleBook.id} {...singleBook} />
  })
  )

  return(
    <section className="booklist">
      {createBooks}
    </section>
  )
}

const Book = (props) => {
  const { imageSrc, title, author } = props;
  return (
    <article className="book">
      <img src={imageSrc} alt="book cover" />
      <p className="title">{title}</p>
      <p className="author">{author}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));