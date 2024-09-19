import React from "react";
import "./work.css";

const Work = () => {
  return (
    <section className="work section" id="portifolio">
      <h2 className="section__title">Valores</h2>
      <span className="section__subtitle">O Que Nos Guiam</span>

      <div className="work__container">
        <div className="work__item">
          <div className="work__icon">
            <i className="bx bx-rocket"></i> {/* Ícone de foguete */}
          </div>
          <div className="work__content">
            <h3 className="work__title">Inovação</h3>
            <p className="work__description">
              Buscamos constantemente novos métodos e tecnologias para criar
              soluções que superem as expectativas de nossos usuários.
            </p>
          </div>
        </div>
        <div className="work__item">
          <div className="work__icon">
            <i className="bx bx-star"></i> {/* Ícone de estrela */}
          </div>
          <div className="work__content">
            <h3 className="work__title">Qualidade</h3>
            <p className="work__description">
              Estamos comprometidos em oferecer serviços de alta qualidade e que
              atendam às necessidades do projeto e do usuário.
            </p>
          </div>
        </div>
        <div className="work__item">
          <div className="work__icon">
            <i className="bx bx-shield"></i> {/* Ícone de escudo */}
          </div>
          <div className="work__content">
            <h3 className="work__title">Integridade</h3>
            <p className="work__description">
              Construímos relacionamentos de confiança com nossos clientes e
              parceiros, agindo de forma honesta, transparente e ética em todas
              as interações.
            </p>
          </div>
        </div>
        <div className="work__item">
          <div className="work__icon">
            <i className="bx bx-book-open"></i> {/* Ícone de livro */}
          </div>
          <div className="work__content">
            <h3 className="work__title">Aprendizagem Contínua</h3>
            <p className="work__description">
              Estamos sempre em busca de aprender e melhorar, acompanhando as
              tendências na área de tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
