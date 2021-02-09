import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const firstBook = {
  title: 'Curves for the Mathematically Curious',
  imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/51fr9AhktcL._SX329_BO1,204,203,200_.jpg',
  author: 'Julian Havil'
}

const secondBook = {
  title: 'Schrodinger Equation',
  imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41NooCklH9L._SX329_BO1,204,203,200_.jpg',
  author: 'Daniel A. Fleisch'
}

function BookList() {
  return(
    <section className="booklist">
      <Book imageSrc={firstBook.imageSrc} title={firstBook.title} author={firstBook.author}/>
      <Book imageSrc={secondBook.imageSrc} title={secondBook.title} author={secondBook.author}/>
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.imageSrc} alt="book cover" />
      <p className="title">{props.title}</p>
      <p className="author">{props.author}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));