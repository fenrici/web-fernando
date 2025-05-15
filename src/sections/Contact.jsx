import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí se conectaría con un servicio de backend
    // Para este ejemplo, simulamos una respuesta exitosa
    
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Gracias por tu mensaje! Te contactaremos pronto.'
    });
    
    // Resetear el formulario
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={setRefs} className="contact section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Contacto
        </motion.h2>
        
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card contact-card">
              <h3 className="contact-title">Información de Contacto</h3>
              
              <div className="contact-item">
                <FaGlobe className="contact-icon" />
                <p>www.fernandodignani.com.ar</p>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>España: +34 608 564486</p>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>Argentina: +54 9 341 5094093</p>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>contacto@fernandodignani.com.ar</p>
              </div>
              
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card form-card">
              {formStatus.submitted && formStatus.success ? (
                <div className="success-message">
                  <h3>¡Mensaje Enviado!</h3>
                  <p>{formStatus.message}</p>
                  <button 
                    className="btn"
                    onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn">Enviar Mensaje</button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact; 