import React from 'react';
import {Form, Navbar, Container, Button, Nav} from "react-bootstrap";
import styles from "../styles/NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
        <Container fluid>
          <Navbar.Brand href="#">BookVerse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
                <Nav.Link href="#action1"><i class="fa-solid fa-house"></i>Home</Nav.Link>
                <Nav.Link href="#action2"><i class="fa-solid fa-book"></i>My Books</Nav.Link>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                <i class="fa-solid fa-magnifying-glass"></i>
                </Form>
            </Nav>
            <Nav
              className="ml-auto"
            >
              <Nav.Link href="#action1"><i class="fa-solid fa-right-to-bracket"></i>Sign in</Nav.Link>
              <Nav.Link href="#action2"><i class="fa-solid fa-user-plus"></i>Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};

export default NavBar;
