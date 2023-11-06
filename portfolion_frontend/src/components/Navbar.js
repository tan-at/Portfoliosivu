import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Container className="px-5">
      <Navbar data-bs-theme="light" expand="md" py="3">
        <Navbar.Brand href="#home">Atte Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#CRUD-app">Phonebook</Nav.Link>
            <Nav.Link href="#Orienteering-app">Orienteering app</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default CustomNavbar;
