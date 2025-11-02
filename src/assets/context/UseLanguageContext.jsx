import { createContext, useContext, useState, useEffect } from 'react'

// Objeto con todas las traducciones
const translations = {
  spanish: {
    header: {
      "home": "Inicio",
      "about-me": "Conoceme",
      "projects": "Proyectos",
      "contact-me": "Contacto"
    },
    home: {
      "home-subtitle": "Bienvenido",
      "home-subtitle-description": "Desarrollador Web Frontend",
      "home-description-text1": "Desarrollo web freelance y para empresas.",
      "home-description-text2": "Tus ideas están a un click de ser realidad."
    },
    "about-me": {
      "about-me-title": "Traveller Coder",
      "about-me-subtitle": "Desarrollador Frontend",
      "about-me-text":"Hola, soy Guillermo Bukowski, desarrollador web full stack con pasión por crear experiencias digitales únicas y funcionales. Mi especialidad es transformar ideas en aplicaciones completas, desde el diseño de interfaces interactivas y visualmente atractivas hasta la lógica del servidor y la gestión de bases de datos. Trabajo con tecnologías como HTML, CSS, JavaScript, React, Node.js, Express y MySQL. Mi camino profesional comenzó en el año 2021, y desde entonces he trabajado en proyectos de todo tipo, desde aplicaciones web de pequeña escala hasta plataformas más complejas. Cada proyecto me reta a aprender y crecer, y mi enfoque siempre está en la calidad del código y en la experiencia del usuario. Lo que diferencia mi trabajo es que lo hago mientras viajo. Vivo y trabajo en mi casa rodante, lo que me permite combinar mi pasión por la tecnología con mi amor por la aventura. Esta forma de vida me da una perspectiva única: cada nuevo lugar me inspira, me conecta con nuevas ideas y, sobre todo, me mantiene motivado para seguir creando soluciones innovadoras que impacten de manera positiva a los usuarios. Para mí, ser desarrollador no es solo una profesión, es un estilo de vida. Me gusta trabajar de manera remota, estableciendo conexiones duraderas con mis clientes y equipos, sin importar en qué parte del mundo me encuentre. Si tenés un proyecto en mente o simplemente querés saber más sobre cómo puedo ayudarte a darle forma a tu idea, no dudes en contactarme. Estoy listo para enfrentarlo, sin importar si estoy en la playa, en la montaña o en la carretera. "},
    projects: {
      "projects-title": "Mis proyectos"
    },
    "projects-unity": {
      "project-01-title": "Juntadelly",
      "project-01-description": "Calculadora para app de pedidos de picadas, hecha con JS, sumada a un sitio WordPress",
      "project-02-title": "Lunaticos de Viaje",
      "project-02-description": "Landing page de empresa de viajes personalizados. Form de contacto, recaptcha y responsive.",
      "project-03-title": "Freelads",
      "project-03-description": "Landing page de la empresa de marketing digital Freelads, con formulario de contacto, responsive.",
      "project-04-title": "ShoesShop",
      "project-04-description": "Modelo de E-commerce de zapatillas, con carrito de compras, responsive.",
      "project-05-title": "Weather App",
      "project-05-description": "Aplicación de clima, con API de OpenWeatherMap, responsive.",
      "project-06-title": "GitHub",
      "project-06-description": "Recuerda que puedes ver el codigo de todos mis proyectos entrando en mi perfil de GitHub.",
      "project-link-button": "Ir al sitio"
    },
    "contact-me": {
      "contact-me-title": "Estemos en contacto!",
      "input-name": "Nombre Completo",
      "input-email": "Email",
      "input-phone": "Numero de telefono",
      "input-subject": "Asunto",
      "input-message": "Tu Mensaje",
      "submit-button": "Contactarme"
    }
  },
  english: {
    header: {
      "home": "Home",
      "about-me": "About Me",
      "projects": "Projects",
      "contact-me": "Contact"
    },
    home: {
      "home-subtitle": "Welcome",
      "home-subtitle-description": "Frontend Web Developer",
      "home-description-text1": "Freelance and enterprise web development.",
      "home-description-text2": "Your ideas are one click away from reality."
    },
    "about-me": {
      "about-me-title": "Traveller Coder",
      "about-me-subtitle": "Frontend Developer",
      "about-me-text":"Hi, I’m Guillermo Bukowski, a full stack web developer passionate about creating unique and functional digital experiences. I specialize in transforming ideas into complete applications — from designing interactive and visually engaging interfaces to building robust backend logic and managing databases. I work with technologies such as HTML, CSS, JavaScript, React, Node.js, Express, and MySQL. My professional journey began in 2021, and since then, I’ve worked on a wide range of projects — from small-scale web applications to more complex platforms. Each project challenges me to learn and grow, and my focus is always on code quality and user experience. What makes my work unique is how I do it: I live and work from my motorhome, combining my passion for technology with my love for travel and adventure. This lifestyle gives me a unique perspective — every new place inspires me, connects me with fresh ideas, and keeps me motivated to create innovative solutions that positively impact users. For me, being a developer is not just a profession — it’s a way of life. I enjoy working remotely, building long-term connections with clients and teams, no matter where I am in the world. If you have a project in mind or simply want to learn more about how I can help bring your idea to life, feel free to get in touch. I’m ready to take it on — whether I’m by the beach, in the mountains, or on the road." },
    projects: {
      "projects-title": "My Projects"
    },
    "projects-unity": {
      "project-01-title": "Juntadelly",
      "project-01-description": "Calculator for appetizer ordering app, built with JavaScript and integrated into WordPress",
      "project-02-title": "Lunaticos de Viaje",
      "project-02-description": "Landing page for personalized travel company. Contact form, recaptcha and responsive.",
      "project-03-title": "Freelads",
      "project-03-description": "Landing page for Freelads digital marketing company, with contact form, responsive.",
      "project-04-title": "ShoesShop",
      "project-04-description": "Sneaker E-commerce model, with shopping cart, responsive.",
      "project-05-title": "Exquis",
      "project-05-description": "Restaurant landing page model, responsive.",
      "project-06-title": "GitHub",
      "project-06-description": "Remember you can see the code of all my projects by visiting my GitHub profile.",
      "project-link-button": "Go to site"
    },
    "contact-me": {
      "contact-me-title": "Let's get in touch!",
      "input-name": "Full Name",
      "input-email": "Email",
      "input-phone": "Phone Number",
      "input-subject": "Subject",
      "input-message": "Your Message",
      "submit-button": "Contact Me"
    }
  }
}

// Función para aplicar textos al DOM
const applyLanguageTexts = (language) => {
  const elements = document.querySelectorAll('[data-section][data-value]')
  
  elements.forEach(element => {
    const section = element.getAttribute('data-section')
    const key = element.getAttribute('data-value')
    
    const text = translations[language]?.[section]?.[key]
    if (text) {
      if (element.tagName === 'INPUT') {
        if (element.type === 'submit') {
          element.value = text
        } else {
          element.placeholder = text
        }
      } else if (element.tagName === 'TEXTAREA') {
        element.placeholder = text
      } else {
        element.textContent = text
      }
    }
  })
}

// Crear el Context
const LanguageContext = createContext()

// Provider Component
export const LanguageProvider = ({ children }) => {
  const getSystemLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage
    return browserLang.startsWith('en') ? 'english' : 'spanish'
  }

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || getSystemLanguage()
  })

  const changeLanguage = (language) => {
    setCurrentLanguage(language)
  }

  useEffect(() => {
    localStorage.setItem('language', currentLanguage)
    setTimeout(() => {
      applyLanguageTexts(currentLanguage)
    }, 100)
  }, [currentLanguage])

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage,
      isSpanish: currentLanguage === 'spanish',
      isEnglish: currentLanguage === 'english'
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook personalizado
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  }
  return context
}