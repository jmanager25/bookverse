import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import styles from '../../styles/BookPage.module.css';
import buttonstyles from '../../styles/Button.module.css';
import { axiosReq } from '../../api/axiosDefaults';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function BookPage() {
    const { id } = useParams();
    const [book, setBook] = useState({});

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
    <Container className={styles.Container}>
      {book && (
        <>
          <Row>
            <Col>
              <Card className={styles.Image}>
                <img src={book.cover_image} alt={book.title} fluid />
              </Card>
              <div>Number of Reviews</div>
              <Link to="/reviews/create">Review This Book</Link>
            </Col>
            <Col xs={12} md={8}>
              <div className={styles.BookInfo}>
                  <div>
                    <div className={styles.Title}>
                      {book.title}
                    </div>
                    <div className="mb-2 text-muted">
                      {book.author}
                    </div>
                  </div>
                  <div>
                    5 star review
                    <span>Average rating</span>
                  </div>
                  <div>
                    Save book Icon
                  </div>
              </div>
                  <Card.Text className={styles.Summary}>{book.summary}</Card.Text> 
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