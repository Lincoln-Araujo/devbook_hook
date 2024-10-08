import React, { useState, useEffect } from "react";
import BookList from "../components/bookList/BookList";
import SearchBar from "../components/searchBar/SearchBar";
import './pages.css';
import axios from "axios";
import {useSearchParams, useLocation} from "react-router-dom"

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  //const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=programming+${query??""}&startIndex=${
          page * 10
        }&maxResults=10`
      )
      .then((response) => setBooks(response.data.items))
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, [page]);

  return (
    <div>
      <h1 className="title">Livros</h1>
      <SearchBar />
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