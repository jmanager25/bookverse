import React from 'react';
import styles from '../../styles/Reviews.module.css'
import buttonstyles from '../../styles/Button.module.css'
import { useCurrentUser } from '../../context/CurrentUserContext';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import StarRating from '../../components/StarRating';

const Review = (props) => {
  const {
    id, 
    owner, 
    review_text, 
    rating, book, 
    created_at, 
    updated_at, 
    profile_image,
    profile_id,
    like_id,
    likes_count,
    comments_count
  } = props;

  const currenUser = useCurrentUser();
  const is_owner = currenUser?.username === owner


  return (
    <div className={styles.Review}>
        <div className={styles.ReviewUser}>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                {owner}
            </Link>
            <Button className={buttonstyles.Button}>follow</Button>
        </div>
        <div className={styles.Details}>
            <StarRating rating={rating}/>
            <div className={styles.ReviewContent}>{review_text}</div>
            <div className={styles.Actions}>
                {is_owner ? (
                    <OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own post!</Tooltip>}>
                        <i className='fa fa-heart' />
                    </OverlayTrigger>
                ): like_id ? (
                    <span onClick={() =>{}}>
                        <i className={`fa fa-heart ${styles.Heart}`}/>
                    </span>
                ): currenUser ? (
                    <span onClick={() =>{}}>
                        <i className={`fa fa-heart ${styles.HeartOutline}`}/>
                    </span>
                ) : (
                    <OverlayTrigger placement='top' overlay={<Tooltip>Log in to like posts!</Tooltip>}>
                        <i className='fa fa-heart' />
                    </OverlayTrigger>
                )}
                {likes_count}
                <Link to={`/reviews/${id}`}>
                    <i className='far fa-comments' />
                </Link>
                {comments_count}
            </div>
        </div>
    </div>
  )
}

export default Review