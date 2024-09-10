import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import BookList from "../components/bookList/BookList";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Faz uma requisição para buscar 10 livros (ou mais) para garantir que tenhamos 4 com imagens válidas
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=programming&maxResults=10');
        const fetchedBooks = response.data.items || [];

        // Filtra livros que tenham uma imagem válida
        const booksWithImages = fetchedBooks.filter(
          (book) => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
        );

        // Garante que sempre haja 4 livros com imagem, pegando apenas os 4 primeiros com imagem válida
        setBooks(booksWithImages.slice(0, 4));
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <SearchBar />
      <BookList books={books} />
    </div>
  );
};

export default Home;
