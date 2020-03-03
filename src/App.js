import React from 'react';
import './App.css';
import Idealogy from './components/Idealogy.js'
import Intro from './components/Intro.js';
import AboutMe from './components/AboutMe.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="container-fluid">
      <div className="navbar-expand fixed-top navbar-dark bg-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
          </li>
          <li>
            <a class="nav-link" href="#">Idealogy<span class="sr-only">(current)</span></a>
          </li>
          <li>
            <a class="nav-link" href="#">Portfolio<span class="sr-only">(current)</span></a>
          </li>
          <li>
            <a class="nav-link" href="#">About Me<span class="sr-only">(current)</span></a>
          </li>
          <li>
            <a class="nav-link" href="#">Contact<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
      <div class="container-home">

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
