import React from 'react';
import './Ideology.css';
import { TrophyFilled } from '@ant-design/icons';

export default function Ideology(){
  return(
    <div className="tri-container">
      <h2 className="section-title">Dev Ideology</h2>
      <div className="shapes-div">
        <div className="shape-div1">
          <div className="tri-one" ></div>
          <TrophyFilled id="trophy-icon" />
        </div>
        <div className="tri-two" ></div>
        <div className="tri-three" ></div>
        <div className="tri-four" ></div>
        <div className="tri-five" ></div>
      </div>
    </div>
  )
}