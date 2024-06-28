import React, { useState } from 'react';
import './contacto.css';

const contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, utilizando fetch o axios
    console.log('Formulario enviado', formData);
  };

  return (
    <div className="contact-container">
      <div className="shop_name">Contacto</div>
        <p className='shop_parrafo'><strong>
  Si tienes alguna pregunta, comentario o necesitas asistencia, <br />
   no dudes en contactarnos. 
  Estamos aquí para ayudarte y <br />
   responder a todas tus inquietudes. <br /> Completa el formulario 
  a continuación <br />
   y nos pondremos en contacto contigo lo antes posible.</strong>
</p>
      <form className="contacto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="contacto_label">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="contacto_input" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="contacto_label">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="contacto_input" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="contacto_label">Mensaje</label>
          <textarea 
            id="message" 
            name="message" 
            className="contacto_input" 
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit" className="contact_btn">Enviar</button>
      </form>
    </div>
  );
};

export default contacto
