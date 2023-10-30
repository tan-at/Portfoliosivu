import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar data-bs-theme="light" expand="lg" py="3">
      <Navbar.Brand href="#home">Atte Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#CRUD-app">Phonebook</Nav.Link>
          <Nav.Link href="#Contact">Contact - Not yet added</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
