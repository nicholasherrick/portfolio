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
          <a href='#home-jump'>Home</a>
        </li>
        <li>
          <a href='#portfolio-jump'>Portfolio</a>
        </li>
        <li>
          <a href='#skills-jump'>Skills</a>
        </li>
        <li>
          <a href='#inquire'>Inquire</a>
        </li>
        <li>
          <a href='#about-jump'>About</a>
        </li>
      </ul>
    </nav>
  );
}
