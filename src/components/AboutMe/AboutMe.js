import React from 'react';
import './AboutMe.css';

export default function AboutMe(props){
    return(
        <div className="-about-div">
            <h2 className="about-title" >A Bit About Me</h2>
            <div className="circle-container">
                <img src="/chrisHeadshotRound.png" className="pic-logo" alt="logo" />
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle2-top"></div>
                <div className="circle2-bottom"></div>
                <div className="circle3"></div>
                <div className="circle3-top"></div>
                <div className="circle3-bottom"></div>
                <div className="circle4"></div>
                <div className="circle4-top"></div>
                <div className="circle4-bottom"></div>
                <div className="circle5"></div>
            </div>
        </div>
    )   
}
