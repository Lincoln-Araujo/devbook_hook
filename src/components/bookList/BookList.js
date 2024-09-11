// src/components/BookList.js
import React from "react";
import BookItem from "../bookItem/BookItem";
import './bookList.css';
import classNames from 'classnames'

const BookList = ({ books, className="" }) => {
  // Filtra apenas livros que tenham uma imagem válida
  const booksWithImages = books.filter(
    (book) => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
  );

  if (booksWithImages.length === 0) {
    return <p>Nenhum livro encontrado com capa disponível.</p>;
  }

  return (
    <div className={classNames('book-list', className)}>
      {booksWithImages.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

