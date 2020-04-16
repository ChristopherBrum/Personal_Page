import React from 'react';
import './AboutMe.css';

export default function AboutMe(props){
    return(
        <div className="-about-div">
            <div className="container-sm">
                <img src="/chris_pic.png" className="pic-logo" alt="logo" />
            </div>
            <div className="container-med"> 
                <h1>A bit about me: </h1>
                <p>I have lived in California my whole life, but am currently exploring {props.place} on my motorcycle. I am trying to ride my motorcycle around the world, albeit slowly, and my pit stop here in Bogotá is to attend a Fullstack Development Bootcamp. Ideally I will be able to work remotely from different places in the world along my journey.  </p>
            </div>
        </div>
    )   
}
