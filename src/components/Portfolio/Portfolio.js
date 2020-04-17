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
            <h3 className="descrip-title">Colabras Game</h3>
            <p className="descrip">Colabras is a mind game using words and colors built in React.js</p>
        </div>
        <div id="hex3" class="hexagon-wrapper">
            <div id="color3" class="hexagon"></div>
            <img src="/taco-white.png" className="taco-logo" alt="logo for Taco To Yousday app" />
        </div>
        <div id="hex4" class="hexagon-wrapper">
            <div id="color2" class="hexagon"></div>
            <img src="/moto-man.png" className="moto-logo" alt="logo for Two Wheeled Buy & Sell app" />
        </div>
        <div id="hex5" class="hexagon-wrapper">
            <div id="color1" class="hexagon"></div>
        </div>
      </div>
    )
}