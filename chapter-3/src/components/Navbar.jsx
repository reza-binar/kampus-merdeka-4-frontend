import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Chapter 3
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/students">
                Students
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user-lists">
                User List
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/contact"}>
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/link-state">
                Link State
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
