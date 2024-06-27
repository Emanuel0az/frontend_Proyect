import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {adminState} from '../login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

function Navbar_home() {
console.log(adminState);
  if (adminState === true) {
    
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
              <NavDropdown.Item href="#" >
                ADMIN
              </NavDropdown.Item>
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