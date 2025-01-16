import React from 'react';
import './HoverCard.css';

const HoverCard = ({ title, content }) => {
  return (
    <div className="hover-card">
      <div className="hover-card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HoverCard;
