import React from 'react';
import './Contact.css';

export default function Contact(){
    return(
      <div className="main-col-container">
        <h2 className="contact-title">Contact</h2>
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
      </div>
    )
}