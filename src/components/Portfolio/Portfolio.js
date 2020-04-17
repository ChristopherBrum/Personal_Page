import React from 'react';
import './Portfolio.css';

export default function Portfolio(){
    return(
      <div className="hex-container">
        <h2 className="portfolio-title">Portfolio</h2>
        <div id="hex1" class="hexagon-wrapper">
            <div id="color1" class="hexagon"></div>
        </div>
        <div id="hex2" class="hexagon-wrapper">
            <div id="color2" class="hexagon"></div>
            <img src="/cobrawhite.png" className="colabras-logo" alt="logo for Colabras Game app" />
            <div className="portfolio-text-div" >
              <h3 className="portfolio-descrip-title">Cobra Colabras</h3>
              <p className="portfolio-descrip">Is a mind game using words and colors. It was a team built project created using React.js</p>
            </div>
        </div>
        <div id="hex3" class="hexagon-wrapper">
            <div id="color3" class="hexagon"></div>
            <img src="/taco-white.png" className="taco-logo" alt="logo for Taco To Yousday app" />
            <div className="upper-portfolio-text-div" >
              <h3 className="portfolio-descrip-title">Taco To Yousday</h3>
              <p className="portfolio-descrip">Is a weekly taco subscription app bringing Taco Tuesday to you. Built with React.js Taco To Yousday utilized Firebase for user autorization/ authentication, Google Maps Api and an indepedent API hosted using Ruby on Rails.</p>
            </div>
        </div>
        <div id="hex4" class="hexagon-wrapper">
            <div id="color2" class="hexagon"></div>
            <img src="/moto-man.png" className="moto-logo" alt="logo for Two Wheeled Buy & Sell app" />
            <div className="portfolio-text-div" >
              <h3 className="portfolio-descrip-title">Two-Wheeled BS</h3>
              <p className="portfolio-descrip">Is a buy & sell app for motorcyclists. Built using Ruby on Rails TWBS and utilizes AWS database storage.</p>
            </div>
        </div>
        <div id="hex5" class="hexagon-wrapper">
            <div id="color1" class="hexagon"></div>
        </div>
      </div>
    )
}