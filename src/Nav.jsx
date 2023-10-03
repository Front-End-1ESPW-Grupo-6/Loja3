import { } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    /*div principal */
    <Navbar collapseOnSelect expand="lg" className="body-tertiary">
      <Container>
        <Navbar.Brand href="/">Galo Cloth</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="casual">Casual</NavLink></Nav.Link>
            <Nav.Link><NavLink to="masculino">Masculino</NavLink></Nav.Link>
            <Nav.Link><NavLink to="feminino">Feminino</NavLink></Nav.Link>
            <Nav.Link><NavLink to="outlet">Outlet</NavLink></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><NavLink to="carrinho">Carrinho</NavLink></Nav.Link>
            <Nav.Link><NavLink to="login">Login</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
