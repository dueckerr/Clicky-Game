import React from 'react';
import "./style.css";

const LogoCard = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
    <img alt={props.team} src={props.image} />
    </div>
  </div>

);

export default LogoCard;
