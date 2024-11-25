import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleThemeOptions, setToggleThemeOptions] = useState(false);
    const themeOptionsRef = useRef(null); 

    const handleClickOutside = (event) => {
        if (themeOptionsRef.current && !themeOptionsRef.current.contains(event.target)) {
            setToggleThemeOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

 
    const closeMenus = () => {
        setToggleMenu(false);
        setToggleThemeOptions(false);
    };

 
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Indominus
                </a>

                <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Inicio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>Sobre nós
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Missão
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portifolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>Valores
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contato
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggleMenu(false)}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggleMenu(!toggleMenu)}>
                    <i className="uil uil-apps"></i>
                </div>

               
            </nav>
        </header>
    );
}

export default Header;
