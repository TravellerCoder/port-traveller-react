import './Header.css'
import { useTheme } from '../../hooks/UserTheme.jsx'
import { useLanguage } from '../../context/UseLanguageContext.jsx'
import { useState } from 'react';
import GradientText from '../../effects/gradientText/GradientText.jsx';
import spainFlag from "/images/spain-flag-icon.png"
import usaFlag from "/images/American-flag-icon.png"


const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme(); 
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  }

  // Función para toggle del menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <a href="/" className="logo">
      <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Portfolio
      </GradientText>
      </a>
    

    <div className="languages">
        <button className={`lang-button ${currentLanguage === 'spanish' ? 'active' : ''}`} onClick={() => handleLanguageChange('spanish')}>
          <img src={spainFlag} alt="es" className="language-flag" />
        </button>
        <button className={`lang-button ${currentLanguage === 'english' ? 'active' : ''}`} onClick={() => handleLanguageChange('english')}>
          <img src={usaFlag} alt="en" className="language-flag" />
        </button>
    </div>

    <i className='bx bx-menu' id="menu-icon" onClick={toggleMenu}></i>

    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <a href="#home" data-section="header" data-value="home">Inicio</a>
        <a href="#about-me" data-section="header" data-value="about-me">Conoceme</a>
        <a href="#projects" data-section="header" data-value="projects">Proyectos</a>
        <a href="#contact-me" data-section="header" data-value="contact-me">Contacto</a>
        <label className="switch">
            <input type="checkbox" id="slider" checked={isDarkMode} onChange={toggleTheme} />
            <span className="slider"></span>
        </label>
    </nav>
    </header>
  )
}

export default Header;
