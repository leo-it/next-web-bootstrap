import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="header fixed-top  " expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header--toggle"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#link">Services</Nav.Link>
            <Nav.Link className="text-white" href="#home">Features</Nav.Link>
            <Nav.Link className="text-white" href="#link">Testimonial</Nav.Link>
            <Nav.Link className="text-white" href="#link">Pricing</Nav.Link>
            <Nav.Link className="text-white" href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
