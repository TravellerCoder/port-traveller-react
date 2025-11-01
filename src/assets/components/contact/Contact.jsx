import './Contact.css'

const Contact = () => {
  return (
    <div className="contact" id="contact-me">
      <h2 className="contact-title" data-section="contact-me" data-value="contact-me-title">Estemos en contacto!</h2>

        <form id="form" action="/contact" method="POST" novalidate>

        <div className="input-box">
            <div className="input-file">
                <input type="text" placeholder="Nombre Completo" id="Nombre" name="nombre"  autoComplete="off" data-section="contact-me" data-value="input-name"/>
                <div className="error" id="errorNombre"></div>
            </div>
            <div className="input-file">
                <input type="email" placeholder="Email" id="Email" name="email" autoComplete="off"/>
                <div className ="error" id="errorEmail"></div>
            </div>
                
        </div>

        <div className="input-box">
            <div className="input-file">
                <input type="text" placeholder="Numero de telefono" id="Telefono" name="telefono" autoComplete="off"/>
                <div className="error" id="errorTelefono"></div>
            </div>
            <div className="input-file">
                <input type="text" placeholder="Asunto" id="Asunto" name="asunto"  autoComplete="off"/>
                <div className="error" id="errorAsunto"></div>
            </div>
        </div>

        <textarea cols="30" rows="10" placeholder="Tu Mensaje" id="Mensaje" name="mensaje"></textarea>

        <input type="submit" value="Contactarme" className="submit-button"/>

    </form>
      
    </div>
  )
}

export default Contact
