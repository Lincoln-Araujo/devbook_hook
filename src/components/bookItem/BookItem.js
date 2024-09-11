// src/components/BookItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './bookItem.css';

const BookItem = ({ book }) => {
  const { id, volumeInfo } = book;
  const { title, authors, imageLinks } = volumeInfo;

  return (
    <div className="book-item">
      <Link to={`/livro/${id}`} className='book'>
        <img
          src={imageLinks.thumbnail}
          alt={title}
        />
        <h3>{title}</h3>
        <p>Autor(es): {authors ? authors.join(', ') : 'Desconhecido'}</p>
      </Link>
    </div>
  );
};

export default BookItem;
