import './Hero.css'


const Hero = () => {
  return (
    <div className='home'>
    <div className="home-content">
        <h3 data-section="home"  data-value="home-subtitle">Bienvenido</h3>
        <h1>Traveller Coder</h1>
        <h3 data-section="home"  data-value="home-subtitle-description"> Desarrollador Web Frontend</h3>
        <p data-section="home" className="home-description-text1" data-value="home-description-text1">Desarrollo web freelance y para empresas. </p>
        <p data-section="home"  data-value="home-description-text2">Tus ideas estan a un click de ser realidad.</p>

        <div className="social-media">
            <a href="https://www.instagram.com/travellercoder.ok"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/in/guillermo-bukowski/" target="blank"><i className='bx bxl-linkedin'></i></a>
            <a href="https://api.whatsapp.com/send/?phone=5491161324145" target="blank"><i className='bx bxl-whatsapp'></i></a>
            <a href="https://github.com/TravellerCoder/" target="blank"><i className='bx bxl-github'></i></a>
        </div>

        <div className="cv-button-spanish">
            <a href="/downloads/CV-GuillermoBukowski.pdf" className="cv-button" id="cv-button-spanish" download="CV Guillermo Bukowski">Descargar CV</a>
        </div>
        <div className="cv-button-english">
            <a href="/downloads/Guillermo_Bukowski_CV_English.pdf" className="cv-button" id="cv-button-english" download="CV Guillermo Bukowski">Download CV</a>
        </div>

    </div>

    <div className="home-img">
        <img src="/images/img-logo.jpg" alt="traveller coder"/>    
    </div>
</div>
  )
}

export default Hero
