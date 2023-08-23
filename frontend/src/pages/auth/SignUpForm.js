import React from 'react';
import { Link } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import buttonstyles from "../../styles/Button.module.css";
import { Container, Form, Button } from 'react-bootstrap';


const SignUpForm = () => {
    return (
        <Container className={styles.Container}>
            <Form className={styles.Form}>
                <h2 className="mb-4 text-center">Sign Up</h2>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name="username" className={styles.Input} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="d-none">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" className={styles.Input} />
                </Form.Group>
                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password1" className={styles.Input} />
                </Form.Group>
                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Confirm Password</Form.Label>
                    <Form.Control type="Password" placeholder="Confirm Password" name="password2" className={styles.Input} />
                </Form.Group>
                <Button type="submit" className={buttonstyles.Button}>Sign Up</Button>
                <p className={`${styles.Text} mt-3`}>Already have an account?<Link to="/signin">login here</Link></p>
            </Form>
        </Container>
    )

};

export default SignUpForm