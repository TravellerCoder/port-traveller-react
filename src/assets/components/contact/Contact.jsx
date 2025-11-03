import './Contact.css'
import { useState } from 'react';
import { useLanguage } from '../../context/UseLanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const { currentLanguage } = useLanguage();

    //Estados para valores del formulario

    const [ formData, SetFormData ] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });

    //Estados para los errores de validacion

    const [ errors, SetErrors] = useState({});
    const [ isSubmitting, setIsSubmitting] = useState(false);
    const [ submitStatus, setSubmitStatus] = useState("");

    const emailjsConfig = {
       serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
       templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
       publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    }

    //Mensajes de error en ambos idiomas 

    const errorMessages = {
        spanish: {
            required: "Este campo es obligatorio",
            invalidEmail: "Por favor ingresa un email valido",
            invalidPhone: "Por favor ingresa un numero de telefono valido",
            minLength: "El mensaje debe tener al menos 10 caracteres",
            success: "Mensaje enviado con exito!",
            error: "Hubo un error al enviar el mensaje. Por favor intenta nuevamente."
        },
        english: { 
            required: "This field is required",
            invalidEmail: "Please enter a valid email",
            invalidPhone: "Please enter a valid phone number",
            minLength: "The message must be at least 10 characters long",
            success: "Message sent successfully!",
            error: "There was an error sending the message. Please try again."
        }
    };  

    //Funcon par validar el mail

     const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);      
        }

    //Funcion para validar el telefono
    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[0-9]{7,15}$/;
        return phoneRegex.test(phone);
    }

    //Funcion para validar campos individuales 

    const validateField = (name, value) => {
        let error;
        const messages = errorMessages[currentLanguage];

        switch(name) {
            case 'nombre':
                if (!value.trim()) {
                    error = messages.required;
                } else if (value.trim().length < 2) {
                    error = messages.minLength.replace( '{min}', '2' );
                }  
                break;

            case 'email':
                if (!value.trim()) {
                    error = messages.required;
                } else if (!validateEmail(value.trim())) {
                    error = messages.invalidEmail;
                }
                break;

            case 'telefono':
                if (!value.trim()) {
                    error = messages.required;
                } else if (!validatePhone(value.trim())) {
                    error = messages.invalidPhone;
                }
                break;

            case 'asunto':
                if (!value.trim()) {
                    error = messages.required;
                } else if (value.trim().length < 2) {
                    error = messages.minLength.replace( '{min}', '2' );
                }
                break;

            case 'mensaje':
                if (!value.trim()) {
                    error = messages.required;
                } else if (value.trim().length < 10) {
                    error = messages.minLength.replace( '{min}', '10' );
                }
                break;

            default:
                break;
        }

        return error;
    }

    //Funcion para manejar cambios en los inputs

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        SetFormData({ ...formData, [name]: value });

        // Validar el campo
        const error = validateField(name, value);
        SetErrors({ ...errors, [name]: error });
    }

    //Funcion para validar todo el forulario

    const validateForm = () => {
        const newErrors = {};

        Object.keys(formData).forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
            }
        });

        SetErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    //Manejar el envio del formulario

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("");

        try { 
            const result = await emailjs.sendForm(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                e.target,
                emailjsConfig.publicKey
            );
            console.log('EmailJS result:', result);
            setSubmitStatus("success");
            
            //limpieza del formulario 
            SetFormData({
                nombre: '',
                email: '',
                telefono: '',
                asunto: '',
                mensaje: ''
            });
            SetErrors({});
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    }    

    return (
    <div className="contact" id="contact-me">
      <h2 className="contact-title" data-section="contact-me" data-value="contact-me-title">Estemos en contacto!</h2>

        <form id="form" action="/contact" method="POST" noValidate>

        <div className="input-box">
            <div className="input-file">
                <input 
                type="text" 
                placeholder="Nombre Completo" 
                id="Nombre" 
                name="user_name"  
                value={formData.nombre}
                onChange={handleInputChange}
                autoComplete="off" 
                data-section="contact-me" 
                data-value="input-name"
                className={errors.nombre ? 'input-error' : ''}
                />
                {errors.nombre && <div className="error" id="errorNombre">{errors.nombre}</div>}
            </div>
                
            <div className="input-file">
                <input 
                type="email" 
                placeholder="Email" 
                id="Email" 
                name="user_email" 
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="off"
                data-section="contact-me"
                data-value="input-email"
                className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <div className="error" id="errorEmail">{errors.email}</div>}
            </div>
                
        </div>

        <div className="input-box">
            <div className="input-file">
                <input type="text" 
                placeholder="Numero de telefono" 
                id="Telefono" 
                name="user_phone" 
                value={formData.telefono}
                onChange={handleInputChange}
                autoComplete="off"
                data-section="contact-me"
                data-value="input-phone"
                className={errors.telefono ? 'input-error' : ''}
                />
                {errors.telefono && <div className="error" id="errorTelefono">{errors.telefono}</div>}
            </div>
            <div className="input-file">
                <input type="text" 
                placeholder="Asunto" 
                id="Asunto" 
                name="user_subject"  
                value={formData.asunto}
                onChange={handleInputChange}
                autoComplete="off"
                data-section="contact-me"
                data-value="input-subject"
                className={errors.asunto ? 'input-error' : ''}
                />
                {errors.asunto && <div className="error" id="errorAsunto">{errors.asunto}</div>}
            </div>
        </div>

        <textarea 
        cols="30"  
        rows="10" 
        placeholder="Tu Mensaje" 
        id="Mensaje" 
        name="user_message"
        value={formData.mensaje}
        onChange={handleInputChange}
        data-section="contact-me"
        data-value="input-message"
        className={errors.mensaje ? 'input-error' : ''}
        >
         {errors.mensaje && <div className="error" id="errorMensaje">{errors.mensaje}</div>}
        </textarea>

        <button
        type="submit" 
        value="Contactarme"
        className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
        data-section="contact-me"
        data-value="submit-button"
        >
        { isSubmitting ? 
            ( currentLanguage === 'spanish' ? 'Enviando...' : 'Sending...' ) :
            ( currentLanguage === 'spanish' ? 'Enviar Mensaje' : 'Send Message' ) }
        </button>

        {/* Mostrar estado de envio */}
        { submitStatus && (
            <div className={`submit-status ${submitStatus}`}>
                {errorMessages[currentLanguage][submitStatus]}
            </div>
        )}
      </form>
    </div>
    )
}

export default Contact
