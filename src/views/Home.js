import React from 'react';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Video from '../assets/vid/video.mp4';
import Nick from '../assets/img/nick.jpg';
import Nick2 from '../assets/img/nick2.jpg';
import CodeImage from '../assets/img/code-image.jpg';
import Resume from '../assets/doc/resume.pdf';
import StaySafe from '../assets/img/staysafe.jpg';
import FridgeFriend from '../assets/img/fridgefriend.png';

export default function Home() {
  return (
    <div>
      <section id='home-jump' className='showcase'>
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
          <h1>Hi, I'm Nick,</h1>
          <h1>I'm a Full Stack Web Developer from Denver, Colorado</h1>
          <a href='#about'>
            <button className='btn'>Read More</button>
          </a>
        </div>
      </section>

      <br id='portfolio-jump' className='my-4' />

      <section id='portfolio'>
        <div className='dark-overlay-2 my-3'>
          <h1 className='text-center py-2'>My Portfolio</h1>
        </div>
        <div className='portfolio-projects'>
          <Project
            title='StaySafe'
            img={StaySafe}
            demo='https://staysafe.best/'
            github='https://github.com/nicholasherrick/Project-Gamma'
            description='StaySafe is a browser based web application intended for use on mobile devices. Our application allows users to call for help on the go with ease, and keep tabs on their friends who are out and about.'
          />
          <Project
            title='Fridge Friend'
            img={FridgeFriend}
            demo='https://fridge-friend-banana.herokuapp.com/'
            github='https://github.com/nicholasherrick/project2'
            description={`Can't decide what to eat? Forgot that milk was about to expire, but you already went shopping? Fridge Friend is for people who want an easy and convenient way to manage their food and shopping endeavors. Keep track of your fridge, pantry, grocery shopping list, and favorite recipes all in one place!`}
          />
        </div>
      </section>

      <hr id='skills-jump' className='my-5' />

      <h1 className='text-center my-2'>My Skills</h1>
      <section id='skills'>
        <div className='languages'>
          <h3>Languages & Markup</h3>
          <ul>
            <li>Javascript</li>
            <li>ES6</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className='frameworks'>
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>React</li>
            <li>SASS</li>
            <li>Express</li>
            <li>Passport</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>Sendgrid</li>
            <li>Handlebars</li>
            <li>Cron</li>
            <li>Moment</li>
            <li>Socketio</li>
            <li>jest/enzyme</li>
            <li>mocha/chai</li>
          </ul>
        </div>
        <div className='technologies'>
          <h3>Technologies</h3>
          <ul>
            <li>Node</li>
            <li>Twilio</li>
            <li>Mongodb</li>
            <li>MySQL</li>
            <li>Google Maps Geocoding</li>
            <li>Firebase</li>
          </ul>
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
            I'm a Web Developer advancing from a traveling career in healthcare.
            Newly certified in Full Stack Web Development from the University of
            Denver. Skills include HTML, CSS, Javascript, Node.js, React.js,
            MySQL, Mongodb, etc. Knowledgeable in UI/UX design principles in
            order to create user friendly, responsive mobile-first web pages.
            Coding apps in group projects has taught me the importance of
            writing clear, easy to understand code using an organized and
            uniform process. I've always been known as a diligent worker and
            team player. I'm looking to utilize my experience traveling the
            country and adhering to rigid of standards in a developer role.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
