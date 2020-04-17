import React from 'react';
import './AboutMe.css';

export default function AboutMe(props){
    return(
        <div className="-about-div">
            <div className="circle-container">
                <img src="/chris_pic.png" className="pic-logo" alt="logo" />
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
            </div>
        </div>
    )   
}
