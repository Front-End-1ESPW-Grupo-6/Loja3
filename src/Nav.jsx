import { } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/nav.css';

function Header() {
  return (
    /*div principal */
    <Navbar collapseOnSelect expand="lg" className="body-tertiary">
      <Container>
        <Navbar.Brand href="/">Galo Cloth</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navStyle">
            <NavLink to="casual">Casual</NavLink>
            <NavLink to="masculino">Masculino</NavLink>
            <NavLink to="feminino">Feminino</NavLink>
            <NavLink to="outlet">Outlet</NavLink>
          </Nav>
          <Nav className="navStyle">
            <NavLink to="carrinho">Carrinho</NavLink>
            <NavLink to="login">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
