import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='content-center'>
        <Link to="/">
          <img src="logo-site.png" alt="Logo"/>
        </Link>
        <nav>
          <Link to="/" className='menuOption'>Início</Link>
          <div>|</div>
          <Link to="/livros" className='menuOption'>Livros</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
