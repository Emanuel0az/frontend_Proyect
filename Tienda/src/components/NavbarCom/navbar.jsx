import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import AddForm from '../addForm/addForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navbar_home({ onSearch }) {
  const [boton, setBoton] = useState('none');
  const [buscador, setBuscador] = useState('');

  useEffect(() => {
    if (localStorage.getItem('Admin_ID') === 'ADMIN') {
      setBoton('block');
    } else {
      setBoton('none');
    }
  }, []);

  function remove() {
    localStorage.removeItem('Admin_ID');
    localStorage.removeItem('Edicion');
  }

  function agregar() {}

  const handleSearch = (event) => {
    setBuscador(event.target.value);
    onSearch(event.target.value);
  };

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
              <NavDropdown.Item href="#">Planas</NavDropdown.Item>
              <NavDropdown.Item href="#">Snapback</NavDropdown.Item>
              <NavDropdown.Item href="#">Béisbol</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{ display: boton }} onClick={agregar} className='addform'>
                <AddForm />
              </NavDropdown.Item>
              <NavDropdown.Item className='btns_nav' onClick={remove} style={{ display: boton }}>
                <Link to="/home" className="nav-links">
                  salir
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Buscar productos"
              className="me-2"
              aria-label="Buscar"
              value={buscador}
              onChange={handleSearch}
            />
          </Form>
          <Nav>
            <Nav.Link href="register">Registrate</Nav.Link>
            <Nav.Link href="login">Iniciar Sesion</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_home;
