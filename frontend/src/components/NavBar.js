import React, { useContext } from 'react';
import {Form, Navbar, Container, Button, Nav} from "react-bootstrap";
import styles from "../styles/NavBar.module.css"
import {NavLink} from "react-router-dom";
import { CurrentUserContext } from '../App';


const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = (
    <> 
      <Nav className="ml-auto">
        <NavLink to="/signin"><i class="fa-solid fa-right-to-bracket"></i>Sign in</NavLink>
        <NavLink to="/signup"><i class="fa-solid fa-user-plus"></i>Sign up</NavLink>
      </Nav>
    </>
  )
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
        <Container fluid>
          <NavLink to="/">
            <Navbar.Brand>BookVerse</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
                <NavLink to="/"><i class="fa-solid fa-house"></i>Home</NavLink>
                <NavLink to="/mybooks"><i class="fa-solid fa-book"></i>My Books</NavLink>
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
            <Nav className="ml-auto">
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};

export default NavBar;
