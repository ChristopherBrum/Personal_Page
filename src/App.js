import React from 'react';
import Ideology from './components/Ideology/Ideology';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="navbar-expand fixed-top navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a className="nav-link" href="#ideology">Ideology<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio">Portfolio<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a className="nav-link" href="#about">About Me<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a className="nav-link" href="#contact">Contact<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
      <div className="container-home">
        <div className="stars-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
        <div className="intro-title">
          <div className="title-div">
            <p className="title-phrase">Hello, I'm <span className="title">Christopher Brum</span></p>
            <p className="title-phrase">I'm a Full Stack Developer</p>
          </div>
            <a href="#portfolio" ><img src="/the-moon.jpg" className="the-moon" alt="the moon" /></a>
        </div>
        <a id="ideology">
          <div id="container-ideology">
            <Ideology />
          </div>
        </a>
        <a id="portfolio">
          <div id="container-portfolio">
            <Portfolio />
          </div>
        </a>
        <a id="about">
          <div id="container-about">
            <AboutMe />
          </div>
        </a>
        <a id="contact">
          <div id="container-contact">
            <Contact />
          </div>
        </a>
        <footer id="footer"></footer>
      </div>
    </div>
  );
}

export default App;
