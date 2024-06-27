import React from 'react'
import './contacto.css'
import Form from 'react-bootstrap/Form';
const contacto = () => {
  

  return (
    <div>
      <div>
        <h2 className='shop_name'>Cap Shore</h2>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
         Cupiditate aut nam a dignissimos ut enim ipsa fugiat voluptas <br />
         assumenda quas praesentium vitae eveniet inventore in explicabo <br />
         officia, consequatur iure neque?</p>
      </div>
      <div className='contacto'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='contacto_label'>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" className='contacto_input'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='contacto_label'>Consulta</Form.Label>
            <Form.Control as="textarea" rows={3} className='contacto_input' />
          </Form.Group>
        </Form>
        <button className='contact_btn'>Enviar</button>
      </div>
    </div>
  )
}

export default contacto