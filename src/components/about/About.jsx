import React from "react";
import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Nós</h2>
      <h3 className="section__subtitle">Quem Somos</h3> {/* Subtítulo Adicionado */}
      
      <div className="about__container container">
        <div className="about__data">
          <Info />

          <p className="about__description">
            Nós somos a equipe Indominus Dev, formada por cinco integrantes
            apaixonados por tecnologia e inovação. Cada membro da nossa equipe
            traz habilidades únicas, que vão desde o desenvolvimento front-end e
            back-end até a análise de dados e design de interfaces. Nosso
            objetivo é oferecer soluções eficientes e personalizadas em
            software, atendendo às necessidades do projeto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
