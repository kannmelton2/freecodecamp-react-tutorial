import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function BookList() {
  // while we write very familiar html here, we are techincally returning JSX
  return(
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <BookTitle />
      <BookAuthor />
    </article>
  )
}

const CoverImage = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/51fr9AhktcL._SX329_BO1,204,203,200_.jpg" alt="book cover"/>
  )
}

const BookTitle = () => {
  return (
    <p className="title">Curves for the Mathematically Curious</p>
  )
}

const BookAuthor = () => {
  return (
    <p className="author">by Julian Havil</p>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));