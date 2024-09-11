// src/components/BookDetail.js
import React from 'react';

const BookDetail = ({ book }) => {
  const { volumeInfo } = book;
  const { title, authors, description, imageLinks } = volumeInfo;

  return (
    <div className="book-detail">
      <img src={imageLinks?.thumbnail} alt={title} />
      <h1>{title}</h1>
      <p>Autor(es): {authors ? authors.join(', ') : 'Desconhecido'}</p>
      <p>{description || 'Sem descrição disponível'}</p>
    </div>
  );
};

export default BookDetail;
