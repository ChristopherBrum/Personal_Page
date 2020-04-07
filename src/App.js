import React from 'react';
import Intro from './components/Intro.js';
import Idealogy from './components/Idealogy.js'
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
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
            <a className="nav-link" href="#">Idealogy<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a className="nav-link" href="#">Portfolio<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a className="nav-link" href="#">About Me<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a className="nav-link" href="#">Contact<span className="sr-only">(current)</span></a>
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
          <div>
            <p className="title-phrase">Hello, I'm <span className="title">Christopher Brum</span></p>
            <p className="title-phrase">I'm a Full Stack Developer</p>
          </div>
        </div>
        <div className="container-idealogy">
       
       </div>
       <div className="container-portfolio">
         
       </div>
       <div className="container-about">
         
       </div>
       <div className="container-contact">
         
       </div>
      </div>
    </div>
  );
}

export default App;
