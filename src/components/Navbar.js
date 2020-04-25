import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          <i className='fas fa-terminal'></i> NicholasHerrick.com
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/inquire'>Inquire</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <a href='#test'>test</a>
        </li>
      </ul>
    </nav>
  );
}
