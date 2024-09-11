import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import BookPage from './pages/BookPage';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Books />} />
        <Route path="/livro/:id" element={<BookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
