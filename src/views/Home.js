import React from 'react';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Video from '../assets/vid/video.mp4';
import Nick2 from '../assets/img/nick2.jpg';
import Resume from '../assets/doc/resume.pdf';
import StaySafe from '../assets/img/staysafe.jpg';
import FridgeFriend from '../assets/img/fridgefriend.png';
import ColoradoHomeSavers from '../assets/img/coloradohomesavers.jpg';
import Warbler from '../assets/img/warbler.jpg';
import Site1627 from '../assets/img/1627.png';
import MuralMap from '../assets/img/muralmap.png';
import ClickyGame from '../assets/img/clickygame.jpg';

export default function Home() {
  return (
    <div>
      <section id='home-jump' className='showcase'>
        <div className='video-container'>
          <video src={Video} autoPlay muted loop height='600'></video>
        </div>
        <div className='content'>
          <div className='dark-overlay'>
            <h1 className='welcome py-1'>Welcome to NicholasHerrick.com</h1>
          </div>
        </div>
      </section>
      <Navbar />
      <section className='flex-wrapper my-5'>
        <div className='text-center'>
          <h1>Hi, I'm Nick,</h1>
          <h1>I'm a Full Stack Web Developer from Denver, Colorado</h1>
          <a href='#about-jump'>
            <button className='btn'>Read More</button>
          </a>
        </div>
      </section>

      <section>
        <div className='text-center'>
          <h1>Experience</h1>
          <h2>Teaching Assistant</h2>
        </div>
      </section>

      <br id='portfolio-jump' className='my-4' />

      <section id='portfolio'>
        <div className='my-4'>
          <h1 className='text-center'>My Portfolio</h1>
        </div>
        <div className='portfolio-projects'>
          <Project
            title='Mural Map'
            img={MuralMap}
            demo='https://muralmap.art/'
            github='https://github.com/nicholasherrick/mural-map-frontend'
            description='Mural Map is a browser based web application intended for use on mobile devices. The application allows users to find, discover and share murals using markers on an interactive google map.'
          />
          <Project
            title='StaySafe'
            img={StaySafe}
            demo='https://stay-safe-fork.herokuapp.com/'
            github='https://github.com/nicholasherrick/Project-Gamma'
            description='StaySafe is a browser based web application intended for use on mobile devices. Our application allows users to call for help on the go with ease, and keep tabs on their friends who are out and about.'
          />
          <Project
            title='Warbler'
            img={Warbler}
            demo='https://warbler-client-nh.herokuapp.com/'
            github='https://github.com/nicholasherrick/warbler'
            description='MERN stack app meant to be similar to twitter. Uses React with Redux & Thunk for promise based global state handling. Features rehydration, uniform error handling, modern async javascript, etc.'
          />
          <Project
            title='Presidential Clicky Game'
            img={ClickyGame}
            demo='https://clicky-game-278.netlify.app/'
            github='https://github.com/nicholasherrick/clicky-game'
            description="React application that tests the user's memory. Don't click the same image twice or you lose!"
          />
          <Project
            title='Fridge Friend'
            img={FridgeFriend}
            demo='https://fridge-friend-banana.herokuapp.com/'
            github='https://github.com/nicholasherrick/project2'
            description={`Can't decide what to eat? Forgot that milk was about to expire, but you already went shopping? Fridge Friend is for people who want an easy and convenient way to manage their food and shopping endeavors. Keep track of your fridge, pantry, grocery shopping list, and favorite recipes all in one place!`}
          />
          <Project
            title='Colorado Home Savers (In Progress)'
            img={ColoradoHomeSavers}
            demo='https://coloradohomesavers.org/'
            github='https://github.com/nicholasherrick/colorado-home-savers'
            description='Static website created for a local llc. Built using React and SASS.'
          />
          <Project
            title='1627 (In Progress)'
            img={Site1627}
            demo='https://1627.us/'
            github='https://github.com/nicholasherrick/1627.us'
            description='Static site for a client who wanted a very simple layout'
          />
        </div>
      </section>

      <section id='inquire'>
        <div id='inquire-overlay'>
          <h1 className='text-center my-2'>Inquire</h1>
          <p className='text-center'>
            If you would like to inquire about any employment oppertunities,
            freelance projects, questions, or feedback, feel free to email me at{' '}
            <a href='mailto:nick@nicholasherrick.com'>
              nick@nicholasherrick.com
            </a>{' '}
            To download my resume,{' '}
            <a href={Resume} download>
              Click Here
            </a>
          </p>
        </div>
      </section>

      <hr id='about-jump' className='special-hr' />

      <section id='about'>
        <h1 className='text-center my-2'>About</h1>
        <div className='about-content'>
          <div>
            <img id='about-img' className='img-fluid' src={Nick2} alt='' />
            <br />
            <small className='text-center'>
              Nicholas Herrick - Full-Stack Web Developer
            </small>
          </div>
          <p>
            Web Developer advancing from a traveling career in healthcare.
            Certified in Full Stack Web Development from the University of
            Denver. Skills include building and managing full stack applications
            using javascript frameworks and technologies, including React, Node,
            MongoDB, etc. Knowledgeable in UI/UX design principles, able to
            create user friendly, responsive, mobile-first web pages. Experience
            coding group projects, aware of the importance of writing clear,
            easy to understand code with an organized and uniform process.
            Understand and can write modern asynchronous Javascript and manage
            global state in React with Redux. Recognized as a conscientious and
            open minded individual that values teamwork, respect, and integrity.
            Excited to utilize previous experience traveling the country and
            adhering to rigid healthcare standards in a developer role.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
