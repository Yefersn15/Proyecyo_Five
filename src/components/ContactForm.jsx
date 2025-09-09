import React, { useState } from 'react';
import { sendContactMessage } from '../utils/googleSheetsService';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim()) {
      alert('Por favor ingresa tu nombre');
      return false;
    }

    if (!email.trim()) {
      alert('Por favor ingresa tu email');
      return false;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor ingresa un email válido');
      return false;
    }

    if (!message.trim()) {
      alert('Por favor ingresa tu mensaje');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendContactMessage(formData);

      if (result.success) {
        setSubmitStatus({ type: 'success', message: '¡Mensaje enviado correctamente!' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Error al enviar mensaje' });
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus({ type: 'error', message: 'Error al enviar mensaje' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Formulario de contacto - 50% */}
        <div className="col-md-6">
          <div className="contact-form-section">
            <h2>📧 Contáctanos</h2>
            <p>¿Tienes preguntas sobre nuestros productos orgánicos? ¡Escríbenos!</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre *</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje *</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={5}
                  required
                />
              </div>

              {submitStatus && (
                <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary bg-gradient"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

        {/* Carrusel - 50% */}
        <div className="col-md-6">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://img.freepik.com/psd-gratis/publicacion-vertical-redes-sociales-viernes-negro-representacion-3d_1419-2435.jpg" className="d-block w-100" alt="Productos orgánicos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Productos 100% Originales</h5>
                  <p>Importado directamente desde tiendas oficiales.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXv6thorotom09kFRLIxT82uVi_qzn5h76Q&s" className="d-block w-100" alt="Entrega rápida" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Entrega Rápida</h5>
                  <p>Recibe tus productos en menos de una semana.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://www.shutterstock.com/image-photo/vertical-side-view-beautiful-blond-600nw-2261833293.jpg" className="d-block w-100" alt="Atención personalizada" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Atención Personalizada</h5>
                  <p>Nuestro equipo está siempre disponible para ayudarte.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;