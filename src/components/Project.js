import React from 'react';

export default function Project({ title, img, demo, github, description }) {
  return (
    <div className='project m-1'>
      <h1>{title}</h1>
      <div className='item blue'>
        <img className='img-fluid' src={img} alt='project screenshot' />
        <a href={demo} target='_blank' rel='noopener noreferrer'>
          <i class='far fa-eye'></i>
        </a>
      </div>
      <p>
        <a href={demo} target='_blank' rel='noopener noreferrer'>
          <button className='btn btn-project'>Demo</button>
        </a>
      </p>
      <p>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <button className='btn btn-project'>Github</button>
        </a>
      </p>
      <p>{description}</p>
    </div>
  );
}
