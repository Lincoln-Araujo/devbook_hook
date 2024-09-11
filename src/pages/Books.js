import React, { useState, useEffect } from "react";
import BookList from "../components/bookList/BookList";
import './pages.css';
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=programming&startIndex=${
          page * 10
        }&maxResults=10`
      )
      .then((response) => setBooks(response.data.items))
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, [page]);

  return (
    <div>
      <h1 className="title">Livros</h1>
      <BookList books={books} />
      <div className="buttons">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <button onClick={() => setPage(page + 1)}>Próxima</button>
      </div>
    </div>
  );
};

export default Books;
