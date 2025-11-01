import { useState, useEffect } from 'react'


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
      "about-me-text": "Hola, soy Guillermo Bukowski, desarrollador web frontend con pasión por crear experiencias digitales únicas y funcionales. Mi especialidad es transformar ideas en interfaces interactivas y visualmente atractivas, utilizando tecnologías como HTML, CSS, JavaScript y frameworks como React. Mi camino profesional comenzó en el año 2021, y desde entonces he trabajado en proyectos de todo tipo, desde aplicaciones web de pequeña escala hasta plataformas más complejas. Cada proyecto me reta a aprender y crecer, y mi enfoque siempre está en la calidad del código y en la experiencia del usuario. Lo que diferencia mi trabajo es que lo hago mientras viajo. Vivo y trabajo en mi casa rodante, lo que me permite combinar mi pasión por la tecnología con mi amor por la aventura. Esta forma de vida me da una perspectiva única: cada nuevo lugar me inspira, me conecta con nuevas ideas y, sobre todo, me mantiene motivado para seguir creando soluciones innovadoras que impacten de manera positiva a los usuarios. Para mí, ser desarrollador no es solo una profesión, es un estilo de vida. Me gusta trabajar de manera remota, estableciendo conexiones duraderas con mis clientes y equipos, sin importar en qué parte del mundo me encuentre. Si tenes un proyecto en mente o simplemente quieres saber más sobre cómo puedo ayudarte a darle forma a tu idea, no dudes en contactarme, estoy listo para enfrentarlo, sin importar si estoy en la playa, en la montaña o en la carretera."
    },
    projects: {
      "projects-title": "Mis proyectos"
    },
    "projects-unity": {
      "project-01-title": "Exquis",
      "project-01-description": "Modelo de landing page de restaurant, responsive.",
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
      "about-me-text": "Hello, I'm Guillermo Bukowski, a frontend web developer with a passion for creating unique and functional digital experiences. My specialty is transforming ideas into interactive and visually appealing interfaces, using technologies like HTML, CSS, JavaScript and frameworks like React. My professional journey began in 2021, and since then I have worked on projects of all kinds, from small-scale web applications to more complex platforms. Each project challenges me to learn and grow, and my focus is always on code quality and user experience. What sets my work apart is that I do it while traveling. I live and work in my RV, which allows me to combine my passion for technology with my love for adventure. This way of life gives me a unique perspective: each new place inspires me, connects me with new ideas and, above all, keeps me motivated to continue creating innovative solutions that positively impact users. For me, being a developer is not just a profession, it's a lifestyle. I like to work remotely, establishing lasting connections with my clients and teams, no matter what part of the world I'm in. If you have a project in mind or just want to know more about how I can help you shape your idea, don't hesitate to contact me, I'm ready to face it, whether I'm at the beach, in the mountains or on the road."
    },
    projects: {
      "projects-title": "My Projects"
    },
    "projects-unity": {
      "project-01-title": "Exquis",
      "project-01-description": "Restaurant landing page model, responsive.",
      "project-02-title": "Lunaticos de Viaje",
      "project-02-description": "Landing page for personalized travel company. Contact form, recaptcha and responsive.",
      "project-03-title": "Freelads",
      "project-03-description": "Landing page for Freelads digital marketing company, with contact form, responsive.",
      "project-04-title": "ShoesShop",
      "project-04-description": "Sneaker E-commerce model, with shopping cart, responsive.",
      "project-05-title": "Weather App",
      "project-05-description": "Weather application, with OpenWeatherMap API, responsive.",
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

export const useLanguage = () => {
  // Detectar idioma del navegador o usar español por defecto
  const getSystemLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage
    return browserLang.startsWith('en') ? 'english' : 'spanish'
  }

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      return savedLanguage
    }
    return getSystemLanguage()
  })

  const changeLanguage = (language) => {
    setCurrentLanguage(language)
  }

  // Aplicar idioma cuando cambie
  useEffect(() => {
    localStorage.setItem('language', currentLanguage)
    // Aquí aplicaremos los textos
    applyLanguageTexts(currentLanguage)
  }, [currentLanguage])

  return { 
    currentLanguage, 
    changeLanguage,
    isSpanish: currentLanguage === 'spanish',
    isEnglish: currentLanguage === 'english'
  }
}

// Función para aplicar los textos
const applyLanguageTexts = (language) => {
  // Buscar todos los elementos con data-section y data-value
  const elements = document.querySelectorAll('[data-section][data-value]')
  
  elements.forEach(element => {
    const section = element.getAttribute('data-section')
    const key = element.getAttribute('data-value')
    
    // Buscar el texto en el objeto de traducciones
    const text = translations[language]?.[section]?.[key]
    if (text) {
      element.textContent = text
    }
  })

}