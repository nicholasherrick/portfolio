import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to='/'>
          <FontAwesomeIcon icon={faTerminal} />
          NicholasHerrick.com
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
          <Link to='/inquiry'>Inquiry</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}
