import './Projects.css'

const Projects = () => {
  return (
    <div className="proyectos" id="projects">
      <h2 className="proyectos-title" data-section="projects" data-value="projects-title">Mis proyectos</h2>

      <div className="proyectos-container" id="projects-unity">
        <div className="proyectos-box">
          <img src="/images/exquis-3.png" alt="" className="proyecto-img"/>
            <div className="proyecto-layer">
                <h4 data-section="projects-unity" data-value="project-01-title">Exquis</h4>
                <p data-section="projects-unity" data-value="project-01-description">Modelo de landing page de restaurant, responsive.</p>
                <a href="https://exquis-menu.onrender.com/" target="_blank" className="proyecto-button" data-section="projects-unity" data-value="project-link-button">Ir al sitio</a>
            </div>
        </div>

        <div className="proyectos-box">
            <img src="/images/lunaticos.png" alt="" className="proyecto-img"/>
            <div className="proyecto-layer">
                <h4 data-section="projects-unity" data-value="project-02-title">Lunaticos de Viaje</h4>
                <p data-section="projects-unity" data-value="project-02-description">Landing page de empresa de viajes personalizados. Form de contacto, recaptcha y responsive.</p>
                <a href="https://lunaticosdeviaje.com/" target="_blank" className="proyecto-button" data-section="projects-unity" data-value="project-link-button">Ir al sitio</a>
            </div>
        </div>

        <div className="proyectos-box">
            <img src="/images/freelads1.png" alt="" className="proyecto-img"/>
            <div className="proyecto-layer">
                <h4 data-section="projects-unity" data-value="project-03-title">Freelads</h4>
                <p data-section="projects-unity" data-value="project-03-description">Landing page de la empresa de marketing digital Freelads, con formulario de contacto, responsive.</p>
                <a href="https://freelads.com.ar/" target="_blank" className="proyecto-button" data-section="projects-unity" data-value="project-link-button">Ir al sitio</a>
            </div>
        </div>

        <div className="proyectos-box">
            <img src="/images/shoes-shop1.png" alt="" className="proyecto-img"/>
            <div className="proyecto-layer">
                <h4 data-section="projects-unity" data-value="project-04-title">ShoesShop</h4>
                <p data-section="projects-unity" data-value="project-04-description">Modelo de E-commerce de zapatillas, con carrito de compras, responsive.</p>
                <a href="https://shoesshop-n9rs.onrender.com/" target="_blank" className="proyecto-button" data-section="projects-unity" data-value="project-link-button">Ir al sitio</a>
            </div>
        </div>

        <div className="proyectos-box">
            <img src="/images/Weather 2.png" alt="" className="proyecto-img"/>
            <div className="proyecto-layer">
                <h4 data-section="projects-unity" data-value="project-05-title">Weather App</h4>
                <p data-section="projects-unity" data-value="project-05-description">Aplicación de clima, con API de OpenWeatherMap, responsive.</p>
                <a href="https://weathertravellerapp.netlify.app/" target="_blank" className="proyecto-button" data-section="projects-unity" data-value="project-link-button">Ir al sitio</a>
            </div>
        </div>

        <div className="proyectos-box">
            <img src="/images/github1.png" alt="" className="proyecto-img"/>
            <div className="proyecto-layer">
                <h4 data-section="projects-unity" data-value="project-06-title">GitHub</h4>
                <p data-section="projects-unity" data-value="project-06-description">Recuerda que puedes ver el codigo de todos mis proyectos entrando en mi perfil de GitHub.</p>
                <a href="https://github.com/TravellerCoder" target="_blank" className="proyecto-button" data-section="projects-unity" data-value="project-link-button">Ir al sitio</a>
            </div>
        </div>
    </div>

    </div>

  )
}

export default Projects
