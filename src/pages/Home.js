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
      <div className="home-align"> 
        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M92.9 60.4L85.5 55.4V40.4L92.9 35.5C93.3 35.2 93.6 34.8 93.6 34.3C93.6 33.8 93.3 33.3 92.9 33.1L54.8 7.49999C54.3 7.19999 53.6 7.19999 53.1 7.49999L6.1 38.9C5.9 39 5.8 39.1 5.7 39.3C5.7 39.3 5.7 39.3 5.7 39.4C5.5 39.7 5.5 39.9 5.5 40.2V67.7C5.5 68.2 5.8 68.7 6.2 68.9L44.3 94.3C44.6 94.5 44.8 94.6 45.1 94.6C45.4 94.6 45.7 94.5 45.9 94.3L93 62.9C93.4 62.6 93.7 62.2 93.7 61.7C93.6 61.1 93.3 60.6 92.9 60.4ZM54 10.6L89.4 34.2L83.6 38C83.3 38.1 83 38.3 82.8 38.5L45 63.7L16.6 44.8C16.5 44.7 16.4 44.7 16.4 44.6L9.6 40.1L54 10.6ZM17.1 48.8L44.1 66.8C44.6 67.1 45.3 67.1 45.8 66.8L82.5 42.3V54.6L45.2 79.2L17.1 61.2V48.8ZM45 91.2L8.4 66.8V43L14.2 46.8V62C14.2 62.5 14.5 63 14.9 63.3L44.5 82.3C44.7 82.5 45 82.5 45.3 82.5C45.6 82.5 45.9 82.4 46.1 82.3L83.5 57.7L89.4 61.7L45 91.2Z" fill="#61DAFB"/><path d="M47.5 24.3L65.3 36.5C65.6 36.7 65.9 36.8 66.1 36.8C66.6 36.8 67 36.6 67.3 36.1C67.8 35.4 67.6 34.5 66.9 34L49.2 21.8C48.5 21.3 47.6 21.5 47.1 22.2C46.6 22.9 46.8 23.8 47.5 24.3Z" fill="#61DAFB"/></svg>
        <h1>Explore, Aprenda e Conquiste</h1>
        <p>O Melhor Catálogo de Livros de Programação para Desenvolvedores de Todos os Níveis</p>
      </div>
      <SearchBar />
      <BookList books={books} />
    </div>
  );
};

export default Home;
