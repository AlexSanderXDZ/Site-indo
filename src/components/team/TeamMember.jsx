import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, title, image }) => {
  return (
    <div className="team-member">
      <div className="team-member__image">
        <img src={image} alt={`${name}`} />
      </div>
      <div className="team-member__info">
        <h3 className="team-member__name">{name}</h3>
        <p className="team-member__title">{title}</p>
      </div>
    </div>
  );
};

export default TeamMember;
