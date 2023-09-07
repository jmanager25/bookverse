import React from 'react';
import { Form, Navbar, Container, Button, Nav } from "react-bootstrap";
import logo from '../assets/logo.png'
import styles from "../styles/NavBar.module.css"
import buttonstyles from "../styles/Button.module.css"
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useBurgerMenu from '../hooks/useBurgerMenu';


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useBurgerMenu();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInIcons = <>
        <NavLink exact activeClassName={styles.Active} to="/"><i class="fa-solid fa-house"></i>Home</NavLink>
        <NavLink activeClassName={styles.Active} to="/mybooks"><i class="fa-solid fa-book"></i>My Books</NavLink>
        <NavLink 
          activeClassName={styles.Active} 
          to="/books/create">
          <i class="far fa-plus-square"></i>Add Book
          </NavLink>
        <NavLink 
        activeClassName={styles.Active} 
        to={`/profiles/${currentUser?.profile_id}`}><Avatar src={currentUser?.profile_image} 
        text={currentUser?.username}
        height={40} />
        </NavLink>
        <NavLink to="/" onClick={handleSignOut}><i class="fa-solid fa-right-from-bracket"></i>Sign out</NavLink>
      </>

  const loggedOutIcons = (
    <> 
      <Nav className="ml-auto">
        <NavLink activeClassName={styles.Active} to="/signin"><i class="fa-solid fa-right-to-bracket"></i>Sign in</NavLink>
        <NavLink activeClassName={styles.Active} to="/signup"><i class="fa-solid fa-user-plus"></i>Sign up</NavLink>
      </Nav>
    </>
  )
  return (
    <Navbar expanded={expanded} expand="md" fixed="top" className={styles.NavBar}>
        <Container fluid>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt='logo' height='60' />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button className={buttonstyles.Button}>Search</Button>
                </Form>
            </Nav>
            <Nav>
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};

export default NavBar;
