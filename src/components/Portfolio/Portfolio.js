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
        </div>
        <div id="hex3" class="hexagon-wrapper">
            <div id="color3" class="hexagon"></div>
        </div>
        <div id="hex4" class="hexagon-wrapper">
            <div id="color2" class="hexagon"></div>
        </div>
        <div id="hex5" class="hexagon-wrapper">
            <div id="color1" class="hexagon"></div>
        </div>
        
        
        
        
        {/* <div id="hex1"></div>        
        <div id="hex2"></div>
        <div id="hex3"></div>
        <div id="hex4"></div>
        <div id="hex5"></div> */}
      </div>
    )
}