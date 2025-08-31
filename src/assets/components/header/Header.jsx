import './Header.css'
import spainFlag from "./images/spain-flag-icon.png"
import usaFlag from "./images/American-flag-icon.png"


const Header = () => {
  return (
    <header className="header">
    <a href="#" className="logo">Portfolio</a>

    <div className="languages">
        <button className="lang-button" data-language="spanish"><img src={spainFlag} alt="es" className="language-flag" /></button>
        <button className="lang-button" data-language="english"><img src={usaFlag} alt="en" className="language-flag" /></button>
    </div>

    <i className='bx bx-menu' id="menu-icon"></i>

    <nav className="navbar">
        <a href="#home" data-section="header" data-value="home">Inicio</a>
        <a href="#about-me" data-section="header" data-value="about-me">Conoceme</a>
        <a href="#projects" data-section="header" data-value="projects">Proyectos</a>
        <a href="#contact-me" data-section="header" data-value="contact-me">Contacto</a>
        <label className="switch">
            <input type="checkbox" id="slider" checked />
            <span className="slider"></span>
        </label>
    </nav>
    </header>
  )
}

export default Header;
