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
          Somos a Indominus, uma equipe composta por cinco especialistas apaixonados por tecnologia
          e inovação. Unimos habilidades em desenvolvimento front-end, back-end, análise de dados
          e design para criar soluções eficientes e sob medida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
