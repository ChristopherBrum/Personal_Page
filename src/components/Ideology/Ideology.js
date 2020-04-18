import React from 'react';
import './Ideology.css';
import { TrophyFilled, 
         FireFilled, 
         EyeFilled, 
         SafetyCertificateFilled,
         ThunderboltFilled } 
from '@ant-design/icons';

export default function Ideology(){
  return(
    <div className="tri-container">
      <h2 className="section-title">My Dev Ideology</h2>
      <div className="shapes-div">
        <div className="shape-div1">
          <div className="tri-one" ></div>
          <TrophyFilled id="trophy-icon" />
        </div>
        <div className="shape-div2">
          <div className="tri-two" ></div>
          <FireFilled id="fire-icon" />
        </div>
        <div className="shape-div3">
          <div className="tri-three" ></div>
          <EyeFilled id="eye-icon" />
        </div>
        <div className="shape-div4">
          <div className="tri-four" ></div>
          <ThunderboltFilled id="thunder-icon" />
        </div>
        <div className="shape-div5">
          <div className="tri-five" ></div>
          <SafetyCertificateFilled id="shield-icon" />
        </div>
      </div>
        <div className="ideology-text-div">
          <section className="id-section">
            <h3 className="descrip-title">Build With Quality</h3>
            <p className="descrip">Write efficient, testable and scalable code by adhering to best software development practices.</p>
          </section>
          <section className="upper-id-section">
            <h3 className="descrip-title">Simple & Elegant</h3>
            <p className="descrip">Keeping a layout clean, simple and easy to naviagte ensures the user can find what they want quickly and easily as well as negotiate their way through the application naturally.</p>
          </section>
          <section className="id-section">
            <h3 className="descrip-title">User First</h3>
            <p className="descrip">Applications are built to ensure the user and has an easy, enjoyable and smooth experience and that their needs are met.</p>
          </section>
          <section className="upper-id-section">
            <h3 className="descrip-title">Speed Efficiency</h3>
            <p className="descrip">Special care is taken to ensure lightning fast speeds, from clean coding and efficient UI design to API performance and proper testing. All parts of what makes an app run quickly.</p>
          </section>
          <section className="id-section">
            <h3 className="descrip-title">Safe & Secure</h3>
            <p className="descrip">An often overlooked aspect of development until it's too late. Every App is built with security in mind from moment one.</p>
          </section>
        </div>
    </div>
  )
}