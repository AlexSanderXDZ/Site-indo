import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';
import adryanImage from '../../assets/adryan-foto.jpeg';
import lucasImage from '../../assets/lucas-foto-black.jpeg';


{/* exemplo pra colocar as img  image: 'path/to/adr.jpg', */}

const teamData = [
  {
    name: 'Adryan Alexander',
    title: 'Proficiencia de cada',
    
  },
  {
    name: 'Edkarllos Fernando',
    title: 'Proficiencia de cada',
   
  },
  {
    name: 'Lucas Batista',
    title: 'Proficiencia de cada',
    
  },
  {
    name: 'Nicholas Balbino',
    title: 'Proficiencia de cada',
    
  },
  {
    name: 'Pedro Lopes',
    title: 'Proficiencia de cada',
    
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2 className="team__title">Nossa Equipe</h2>
      <span className="section__subtitle"></span>
      <div className="team__members">
        {teamData.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
