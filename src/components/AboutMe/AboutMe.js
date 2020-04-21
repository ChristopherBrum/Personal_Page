import React from 'react';
import './AboutMe.css';

export default function AboutMe(props){
    return(
        <div className="about-div">
            <div className="circle-container">
            <h2 className="about-title" >A Bit About Me</h2>
                <div className="pic-div">
                    <p className="about-text">I’ve been hooked on coding and web development ever since the first time I got “Hello World” to appear on my browser. I love puzzles and problem solving. I also love the beauty of simplicity. To me, web development is the perfect blend of solving puzzles and organizing the pieces of that puzzle into something simple, intuitive and easily-usable. It’s a never-ending learning experience that is both challenging and rewarding.</p>
                    <img src="/chris-headshot-round.png" alt='Chris Headshot' className="pic-logo" />
                    <p className="about-text-2">Christopher Brum is from Oakland California</p>
                </div>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
                <div className="ring-container">
                    <div id="ring1"></div>
                    <div id="ring2"></div>
                    <div id="ring3"></div>
                    <div id="ring4"></div>
                    <div id="ring5"></div>
                </div>
            </div>
        </div>

    )   
}
