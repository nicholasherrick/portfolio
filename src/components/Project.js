import React from 'react';

export default function Project(props) {
  return (
    <div className='project m-1'>
      <h1>{props.title}</h1>
      <div className='item blue'>
        <img className='img-fluid' src={props.img} alt='' />
        <a href={props.demo}>
          <i class='far fa-eye'></i>
        </a>
      </div>
      <p>
        <a href={props.demo}>
          <button className='btn btn-project'>Demo</button>
        </a>
      </p>
      <p>
        <a href={props.github}>
          <button className='btn btn-project'>Github</button>
        </a>
      </p>
      <p>{props.description}</p>
    </div>
  );
}
