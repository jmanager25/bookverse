import React, { useEffect, useState } from 'react'
import styles from '../styles/Books.module.css';
import buttonstyles from '../styles/Button.module.css'
import {Container, Row, Button, Card, Col} from "react-bootstrap";
import { axiosReq } from '../api/axiosDefaults';


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const response = await axiosReq.get('/books/')
                setBooks(response.data);
            }catch(err) {
                console.log(err)
            }
        };
        handleMount();
    }, [])
  return (
    <Container className={styles.Container}>
        <Row xs={1} md={2} lg={3}>
            {books.map((book) => (
                <Card key={book.id} className={styles.Card}>
                    <Card.Img variant='top' src={book.cover_image} alt={book.title} className={styles.CardImage} />
                    <Card.Body>
                        <Card.Title className='text-center'>{book.title}</Card.Title>
                        <div className='text-center'>
                            <Button className={buttonstyles.Button}>Save Book</Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    </Container>
  )
}

export default Books;