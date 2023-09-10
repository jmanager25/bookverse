import React from 'react'
import { Button, Container } from 'react-bootstrap';
import styles from '../../styles/ReviewCreateEditForm.module.css'
import buttonstyles from '../../styles/Button.module.css'

function ReviewCreateForm() {
  return (
    <Container className={styles.Container}>
        <h2 className={styles.Title}>Add Review</h2>
        <form className={styles.Form}>
            <textarea
                className={styles.TextArea}
                placeholder='Write your review here...'
            />
            <Button className={buttonstyles.Button} type='submit'>Submit</Button>
        </form>
    </Container>
  )
}

export default ReviewCreateForm;