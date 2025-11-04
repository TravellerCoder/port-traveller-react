import './Contact.css'
import { useState, useRef } from 'react';
import { useLanguage } from '../../context/UseLanguageContext';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

    const { currentLanguage } = useLanguage(); // Contexto de idioma

    const formRef = useRef(); // Referencia al formulario

    const recaptchaRef = useRef();  // Referencia al ReCAPTCHA

    //Estados para valores del formulario

    const [ formData, setFormData ] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        subject: '',
        message: ''
    });

    //Estados para los errores de validacion

    const [ errors, setErrors] = useState({});
    const [ isSubmitting, setIsSubmitting] = useState(false);
    const [ submitStatus, setSubmitStatus] = useState("");
    const [ recaptchaValue, setRecaptchaValue ] = useState(null);

    //Configuracion de EmailJS desde variables de entorno
    const emailjsConfig = {
       serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
       templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
       publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    }

    // Configuracion de ReCAPTCHA desde variables de entorno
    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    //Mensajes de error en ambos idiomas 

    const errorMessages = {
        spanish: {
            required: "Este campo es obligatorio",
            invalidEmail: "Por favor ingresa un email valido",
            invalidPhone: "Por favor ingresa un numero de telefono valido",
            minLength: "El mensaje debe tener al menos 10 caracteres",
              recaptcha: "Por favor completa la verificación reCAPTCHA",
            success: "Gracias por tu mensaje! Muy pronto estaremos en contacto.",
            error: "Hubo un error al enviar el mensaje. Por favor intenta nuevamente."
        },
        english: { 
            required: "This field is required",
            invalidEmail: "Please enter a valid email",
            invalidPhone: "Please enter a valid phone number",
            minLength: "The message must be at least 10 characters long",
            recaptcha: "Please complete the reCAPTCHA verification",
            success: "Thank you for your message! I´ll contact you soon.",
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
        let error = "";
        const messages = errorMessages[currentLanguage];

        switch(name) {
            case 'user_name':
                if (!value.trim()) {
                    error = messages.required;
                } else if (value.trim().length < 2) {
                    error = messages.minLength.replace( '{min}', '2' );
                }  
                break;

            case 'user_email':
                if (!value.trim()) {
                    error = messages.required;
                } else if (!validateEmail(value.trim())) {
                    error = messages.invalidEmail;
                }
                break;

            case 'user_phone':
                if (!value.trim()) {
                    error = messages.required;
                } else if (!validatePhone(value.trim())) {
                    error = messages.invalidPhone;
                }
                break;

            case 'subject':
                if (!value.trim()) {
                    error = messages.required;
                } else if (value.trim().length < 2) {
                    error = messages.minLength.replace( '{min}', '2' );
                }
                break;

            case 'message':
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

        setFormData(prev => ({
        ...prev,
        [name]: value
    }));

        // Validar el campo
        const error = validateField(name, value);
    setErrors(prev => ({
        ...prev,
        [name]: error
    }));
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
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    // Función para manejar el cambio del reCAPTCHA
        const handleRecaptchaChange = (token) => {
            setRecaptchaToken(token);
            // Limpiar error de reCAPTCHA si existe
            if (errors.recaptcha) {
                setErrors(prev => ({ ...prev, recaptcha: '' }));
            }
        };

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
            setSubmitStatus("success");
            
            //limpieza del formulario 
            setFormData({
                user_name: '',
                user_email: '',
                user_phone: '',
                subject: '',
                message: ''
            });
            setErrors({});
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    }    

    return (
    <div className="contact" id="contact-me">
      <h2 className="contact-title" data-section="contact-me" data-value="contact-me-title">Estemos en contacto!</h2>

        <form ref={formRef} onSubmit={handleSubmit} noValidate>

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
                className={errors.user_name ? 'input-error' : ''}
                />
                {errors.user_name && <div className="error" id="errorNombre">{errors.user_name}</div>}
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
                className={errors.user_email ? 'input-error' : ''}
                />
                {errors.user_email && <div className="error" id="errorEmail">{errors.user_email}</div>}
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
                className={errors.user_phone ? 'input-error' : ''}
                />
                {errors.user_phone && <div className="error" id="errorTelefono">{errors.user_phone}</div>}
            </div>
            <div className="input-file">
                <input type="text" 
                placeholder="Asunto" 
                id="Asunto" 
                name="subject"  
                value={formData.subject}
                onChange={handleInputChange}
                autoComplete="off"
                data-section="contact-me"
                data-value="input-subject"
                className={errors.subject ? 'input-error' : ''}
                />
                {errors.subject && <div className="error" id="errorAsunto">{errors.subject}</div>}
            </div>
        </div>

        <textarea 
        cols="30"  
        rows="10" 
        placeholder="Tu Mensaje" 
        id="Mensaje" 
        name="message"
        value={formData.mensaje}
        onChange={handleInputChange}
        data-section="contact-me"
        data-value="input-message"
        className={errors.message ? 'input-error' : ''}
        >
         {errors.message && <div className="error" id="errorMensaje">{errors.message}</div>}
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
