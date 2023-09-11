import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import styles from '../../styles/ReviewCreateEditForm.module.css'
import buttonstyles from '../../styles/Button.module.css'
import StarRating from '../../components/StarRating';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';

function ReviewCreateForm() {
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [reviewData, setReviewData] = useState({
    review_text: '',
    rating: 0,
  });

  const {review_text, rating} = reviewData;

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('review_text', review_text)
    formData.append('rating', rating)

    try {
      const {data} = await axiosReq.post('/reviews', formData)
      history.push(`/reviews/${data.id}`)
      console.log(data)
    } catch(err) {
      if (err.response?.status !== 401){
        setErrors(err.response?.data)
      }
    }
  }

  return (
    <Container className={styles.Container}>
        <h2 className={styles.Title}>Add Review</h2>
        <Form className={styles.Form} onSubmit={handleSubmit}>
          <Form.Group controlId='review_text' className={styles.TextArea}>
              <Form.Label className={styles.FormLabel} hidden>Review Text</Form.Label>
              <Form.Control
                  className={styles.FormControl}
                  as='textarea'
                  name='review_text'
                  placeholder='Write your review here...'
                  rows={6}
                  value={review_text}
                  onChange={handleChange}
              />
          </Form.Group>
          <StarRating value={rating} onChange={handleChange} />
          <Button className={buttonstyles.Button} type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default ReviewCreateForm;