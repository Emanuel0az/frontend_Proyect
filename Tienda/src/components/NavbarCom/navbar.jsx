import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

function Navbar_home() {
  const [boton, setBoton] = useState('none');

  useEffect(() => {
    if (localStorage.getItem('Admin_ID') === 'ADMIN') {
      setBoton('block');
    } else {
      setBoton('none');
    }
  }, []);


  function remove() {
    localStorage.removeItem('Admin_ID')
    removido = true
    if (removido === true) {
      
    }
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href="about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="contacto">Contactanos</Nav.Link>
            <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Clasicas</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" style={{ display: boton }}>
                Agregar
              </NavDropdown.Item>
              <button className='btns_nav' onClick={remove} style={{ display: boton }}><Link to="/home" className="nav-links">
        salir
            </Link></button>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="register">Registrate</Nav.Link>
            <Nav.Link href="login">
              Iniciar Sesion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_home;