import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => {
        setBook(response.data);
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${response.data.volumeInfo.categories[0]}&maxResults=4`);
      })
      .then(response => setRelatedBooks(response.data.items))
      .catch(error => console.error('Erro ao buscar livro:', error));
  }, [id]);

  if (!book) return <div>Carregando...</div>;

  return (
    <div className='text-color'>
      <div className='align'>
        <div className='m-img'>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
        </div>
        <div className='m-txt'>
          <h1 className='title-book'>{book.volumeInfo.title}</h1>
          <p>{book.volumeInfo.authors.join(', ')}</p>
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
      <div>
        <h2 className='title'>Livros Relacionados</h2>
        <ul>
          {relatedBooks.map(related => (
            <li key={related.id}>{related.volumeInfo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookPage;
