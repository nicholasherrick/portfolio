import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Video from '../assets/vid/video.mp4';
import Nick from '../assets/img/nick.jpg';

export default function Home() {
  return (
    <div>
      <section className='showcase'>
        <div className='video-container'>
          <video src={Video} autoPlay muted loop height='600'></video>
        </div>
        <div className='content'>
          <div className='dark-overlay'>
            <h1 className='welcome py-1'>
              <i className='fas fa-terminal'></i>Welcome to NicholasHerrick.com
            </h1>
          </div>
        </div>
      </section>
      <Navbar />
      <section className='flex-wrapper'>
        <img className='img-fluid' src={Nick} alt='' />
        <div className='text-center'>
          <a id='test'>
            <h1>Hi, I'm Nick,</h1>
          </a>
          <h1>I'm a Full Stack Web Developer from Denver, Colorado</h1>
          <Link to='/about'>
            <button className='btn'>Read More</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
