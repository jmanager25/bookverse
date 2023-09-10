import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import styles from '../../styles/ReviewCreateEditForm.module.css'
import buttonstyles from '../../styles/Button.module.css'
import StarRating from '../../components/StarRating';

function ReviewCreateForm() {
  


  return (
    <Container className={styles.Container}>
        <h2 className={styles.Title}>Add Review</h2>
        <Form className={styles.Form}>
          <Form.Group controlId='review_text' className={styles.TextArea}>
              <Form.Label className={styles.FormLabel} hidden>Review Text</Form.Label>
              <Form.Control
                  className={styles.FormControl}
                  as='textarea'
                  name='review_text'
                  placeholder='Write your review here...'
                  rows={6}
              />
          </Form.Group>
          <StarRating />
          <Button className={buttonstyles.Button} type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default ReviewCreateForm;