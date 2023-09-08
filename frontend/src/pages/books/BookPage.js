import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import styles from '../../styles/BookPage.module.css';
import buttonstyles from '../../styles/Button.module.css';
import { axiosReq } from '../../api/axiosDefaults';

function BookPage() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const response = await axiosReq.get(`/books/${id}`);
                setBook(response.data);
                console.log(response)
            } catch(err){
                console.log(err)
            }
        };
        handleMount()
    }, [id])

  return (
    <Container>
      {book && (
        <>
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <img src={book.cover_image} alt={book.title} fluid />
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {book.title}
                    {book.average_rating}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {book.author}
                  </Card.Subtitle>
                  <Card.Text>{book.summary}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
        </>
      )}
    </Container>
  )
}

export default BookPage;