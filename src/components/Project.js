import React from 'react';

export default function Project(props) {
  return (
    <div className='project m-1'>
      <h1>{props.title}</h1>
      <img className='img-fluid' src={props.img} alt='' />
      <p>
        <a href={props.demo}>Click Here </a>to see the app
      </p>
      <p>
        <a href={props.github}>Click Here </a>to visit github repo
      </p>
      <p>{props.description}</p>
    </div>
  );
}
