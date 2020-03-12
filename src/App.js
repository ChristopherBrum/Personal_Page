import React from 'react';
import Intro from './components/Intro.js';
import Idealogy from './components/Idealogy.js'
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


function App() {
  return (
    <div className="container-fluid">
      <div className="navbar-expand fixed-top navbar-dark bg-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li>
            <a class="nav-link" href="#">Idealogy</a>
          </li>
          <li>
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li>
            <a class="nav-link" href="#">About Me</a>
          </li>
          <li>
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div class="container-home">
        <div className="stars-container">
          <div class="stars"></div>
          <div class="twinkling"></div>
          <div class="clouds"></div>
        </div>
        <div className="intro-title">
          <div>
            <p className="title-phrase">Hello, I'm <span className="title">Christopher Brum</span></p>
            <p className="title-phrase">I'm a Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div class="container-idealogy">
       
      </div>
      <div class="container-portfolio">
        
      </div>
      <div class="container-about">
        
      </div>
      <div class="container-contact">
        
      </div>
    </div>
  );
}

export default App;
