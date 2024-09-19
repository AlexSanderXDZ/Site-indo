import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Missão</h2>
      <h3 className="section__subtitle">Nossa Visão</h3> {/* Subtítulo Adicionado */}
      
      <p className="skills__description">
        A missão da Indominus Dev é criar soluções acessíveis para os atuais
        problemas de nossa sociedade. Temos o compromisso de fornecer serviços
        de alta qualidade que atendam às necessidades de nossos clientes e
        superem suas expectativas. Utilizando as tecnologias disponíveis,
        buscamos ajudar as pessoas a lidarem com seus problemas.
      </p>
    </section>
  );
};

export default Skills;
