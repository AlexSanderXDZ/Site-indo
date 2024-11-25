import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';
import adryanImage from '../../assets/adryan-foto.jpeg';
import lucasImage from '../../assets/lucas-foto-black.jpeg';


{/* exemplo pra colocar as img  image: 'path/to/adr.jpg', */}

const teamData = [
  {
    name: 'Adryan Alexander',
    title: 'Front-End Dev',
    
  },
  {
    name: 'Edkarllos Fernando',
    title: 'Banco de Dados',
   
  },
  {
    name: 'Lucas Batista',
    title: 'Desenvolvedor Mobile',
    
  },
  {
    name: 'Nicholas Balbino',
    title: 'Back-End Dev',
    
  },
  {
    name: 'Pedro Lopes',
    title: 'Analista de Sistemas',
    
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
