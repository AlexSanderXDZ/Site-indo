import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';
import adryanImage from '../../assets/adryan-foto.jpeg';
import lucasImage from '../../assets/lucas-foto-black.jpeg';


{/* exemplo pra colocar as img  image: 'path/to/adr.jpg', */}

const teamData = [
  {
    name: 'Adryan Alexander',
    title: 'Desenvolvedor Front-end',
    
  },
  {
    name: 'Edkarllos Fernando',
    title: 'Desenvolvedor Database',
   
  },
  {
    name: 'Lucas Batista',
    title: 'Desenvolvedor Full-stack',
    
  },
  {
    name: 'Nicholas Balbino',
    title: 'Desenvolvedor Full-stack',
    
  },
  {
    name: 'Pedro Lopes',
    title: 'Designer',
    
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2 className="team__title">Nossa Equipe</h2>
      <span className="section__subtitle">Nossos membros</span>
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
