import React, { useEffect, useState } from 'react'
import styles from '../styles/Books.module.css';
import buttonstyles from '../styles/Button.module.css'
import {Container, Row, Button, Card} from "react-bootstrap";
import { axiosReq } from '../api/axiosDefaults';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Books = () => {
    const [books, setBooks] = useState([]);
    const history = useHistory();

    const handleEdit = (id) => {
        history.push(`/books/${id}/edit`)
    };

    const handleDelete = async (id) => {
        try {
            await axiosReq.delete(`/books/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

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
                    <Link to={`books/${book.id}`} className={styles.Link}>
                        <Card.Img variant='top' src={book.cover_image} alt={book.title} className={styles.CardImage} />
                    </Link>
                    <Card.Body>
                        <Card.Title className='text-center'>{book.title}</Card.Title>
                        {book.is_owner && (
                            <>
                            <span>
                                <i onClick={() => handleEdit(book.id)} className="fas fa-edit"></i>
                                <i onClick={() => handleDelete(book.id)} className="fas fa-trash"></i>
                            </span>
                            </>
                        )}
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