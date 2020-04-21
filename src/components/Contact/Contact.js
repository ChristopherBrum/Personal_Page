import React from 'react';
import './Contact.css';
import { GithubFilled, TwitterCircleFilled, CodepenCircleFilled, LinkedinFilled, UpSquareOutlined } from '@ant-design/icons';

export default function Contact(){
    return(
      <div className="main-col-container">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="column-container">
          <div className="col-x"></div>
          <div className="col-a"></div>
          <div className="col-b"></div>
          <div className="col-c"></div>
          <div className="col-d"></div>
          <div className="col-e"></div>
          <div className="col-d"></div>
          <div className="col-c"></div>
          <div className="col-b"></div>
          <div className="col-a"></div>
          <div className="col-x"></div>
          <div className="col-a"></div>
          <div className="col-b"></div>
          <div className="col-c"></div>
          <div className="col-d"></div>
          <div className="col-e"></div>
          <div className="col-d"></div>
          <div className="col-c"></div>
          <div className="col-b"></div>
          <div className="col-a"></div>
          <div className="col-x"></div>
        </div>
        <div className="message-div">
          <div id="user-message-div">
            <label for="user-email">Email:</label>
            <input id="user-email" type="email" placeholder="Enter you email..." required></input>
            <label for="message-input" placeholder="Enter you message..." required>Send me a message:</label>
            <textarea id="user-message" type="text" placeholder="Enter you message..."></textarea>
          </div>
        </div>
        <div id="social-icons">
          <a href="https://www.linkedin.com/in/chris-brum/" target="_blank" ><LinkedinFilled /></a>
          <a href="https://github.com/ChristopherBrum" target="_blank" ><GithubFilled /></a>
          <a href="https://twitter.com/_B_R_U_M_" target="_blank" ><TwitterCircleFilled /></a>
          <a href="https://codepen.io/christopherbrum" target="_blank" ><CodepenCircleFilled /></a>
        </div>
        <div id="up-icon">
          <a href="#container-home"><UpSquareOutlined /></a>
        </div>
      </div>
    )
}