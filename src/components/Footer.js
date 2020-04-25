import React from 'react';

export default function Footer() {
  return (
    <footer className='footer text-center'>
      <div>
        <a className='m-1' href='https://github.com/nicholasherrick'>
          <i className='fab fa-github-square fa-3x'></i>
        </a>
        <a
          className='m-1'
          href='https://www.linkedin.com/in/nicholasherrick-dev/'
        >
          <i className='fab fa-linkedin fa-3x'></i>
        </a>
        <a className='m-1' href='https://twitter.com/Nick_Herrick_'>
          <i className='fab fa-twitter-square fa-3x'></i>
        </a>
        <a className='m-1' href='mailto:nick@nicholasherrick.com'>
          <i className='fas fa-at fa-3x'></i>
        </a>
      </div>
      <small>
        Copyright &copy; 2020 nicholasherrick.com. All rights reserved
      </small>
    </footer>
  );
}
