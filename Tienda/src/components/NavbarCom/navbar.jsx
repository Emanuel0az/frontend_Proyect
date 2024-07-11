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
  const [boton, setBoton] = useState('none'); // Estado para mostrar u ocultar los botones de administrador
  const [buscador, setBuscador] = useState(''); // Estado para controlar el valor del campo de búsqueda

  // Efecto que se ejecuta una vez al cargar el componente
  useEffect(() => {
    if (localStorage.getItem('Admin_ID') === 'ADMIN') {
      setBoton('block'); // Mostrar botones de administrador si el usuario es admin
    } else {
      setBoton('none'); // Ocultar botones de administrador si el usuario no es admin
    }
  }, []);

  // Función para eliminar valores guardados en el almacenamiento local y recargar la página
  function remove() {
    localStorage.removeItem('Admin_ID');
    localStorage.removeItem('Edicion');
    window.location.reload(); // Recargar la página
  }

  function agregar() {} // Función que actualmente no hace nada

  // Función para manejar el evento de búsqueda
  const handleSearch = (event) => {
    setBuscador(event.target.value);
    onSearch(event.target.value);
  };

  return (
    // Navbar importado de Bootstrap
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="contacto">Contáctanos</Nav.Link>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Planas</NavDropdown.Item>
              <NavDropdown.Item href="#">Snapback</NavDropdown.Item>
              <NavDropdown.Item href="#">Béisbol</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{ display: boton }} onClick={agregar} className='addform'>
                <AddForm />
              </NavDropdown.Item>
              <NavDropdown.Item className='btns_nav' onClick={remove} style={{ display: boton }}>
                <Link to="/" className="nav-links">
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
            <Nav.Link href="register">Regístrate</Nav.Link>
            <Nav.Link href="login">Iniciar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_home;
