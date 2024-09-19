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

    const changeTheme = (primaryColor, titleColor, bodyColor, textColor, containerColor) => {
        document.documentElement.style.setProperty("--primary-color", primaryColor);
        document.documentElement.style.setProperty("--title-color", titleColor);
        document.documentElement.style.setProperty("--body-color", bodyColor);
        document.documentElement.style.setProperty("--text-color", textColor);
        document.documentElement.style.setProperty("--container-color", containerColor);
    };

    const closeMenus = () => {
        setToggleMenu(false);
        setToggleThemeOptions(false);
    };

    const themeOptions = [
        { id: 1, primaryColor: "rgba(25, 118, 210, 1)", titleColor: "rgba(51, 51, 51, 1)", bodyColor: "rgba(245, 245, 245, 1)", textColor: "rgba(30, 30, 30, 1)", containerColor: "rgba(245, 245, 245, 1)" },
        { id: 2, primaryColor: "rgba(245, 166, 35, 1)", titleColor: "rgba(51, 51, 51, 1)", bodyColor: "rgba(245, 245, 245, 1)", textColor: "#e68a00", containerColor: "rgba(245, 245, 245, 1)" },
        { id: 3, primaryColor: "rgba(255, 0, 0, 1)", titleColor: "rgba(51, 51, 51, 1)", bodyColor: "rgba(245, 245, 245, 1)", textColor: "#ff0000", containerColor: "rgba(245, 245, 245, 1)" },
        { id: 4, primaryColor: "rgba(0, 176, 80, 1)", titleColor: "#ffffff", bodyColor: "rgba(30, 30, 30, 1)", textColor: "#4CAF50", containerColor: "rgba(30, 30, 30, 1)" },
        { id: 5, primaryColor: "rgba(186, 85, 211, 1)", titleColor: "#ffffff", bodyColor: "rgba(30, 30, 30, 1)", textColor: "#d8a8ff", containerColor: "rgba(30, 30, 30, 1)" },
        { id: 6, primaryColor: "rgba(25, 25, 112, 1)", titleColor: "#ffffff", bodyColor: "rgba(30, 30, 30, 1)", textColor: "#00cec9", containerColor: "rgba(30, 30, 30, 1)" }
    ];

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
                                <i className="uil uil-estate nav__icon"></i>Home
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
