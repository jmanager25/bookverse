import React from 'react';
import {Form, Navbar, Container, Button, Nav} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">BookVerse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">My Books</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="ml-auto"
            >
              <Nav.Link href="#action1">Sign in</Nav.Link>
              <Nav.Link href="#action2">Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};

export default NavBar;
