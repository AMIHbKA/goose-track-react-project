import React, { useState, useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import { ThemeContext } from 'styled-components';

import {
  ButtonContainer,
  CancelButton,
  DeleteButton,
  EditButton,
  LabelText,
  ModalContainer,
  RaitingContainer,
  RaitingLabel,
  ReviewContainer,
  ReviewInput,
  SaveEditButton,
  StyledReviewButton,
} from './FeedbackModal.styled';
import { PencilIcon, TrashIcon2 } from 'UI';

import { sendFeedbackToBackend } from '../../../UI/servisesHttp/sendFeedbackToBackend';
import { deleteReview } from '../../../UI/servisesHttp/delereReview';

import axios from 'axios';
import { useEffect } from 'react';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com',
});

export const FeedbackModal = ({ onCancel, initialReview }) => {
  const [rating, setRating] = useState(initialReview?.rating || 0);
  const [review, setReview] = useState(initialReview?.review || '');
  // const [buttonsVisible, setButtonsVisible] = useState(false);
  const [saveClicked, setSaveClicked] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [cancelButtonFocused, setCancelButtonFocused] = useState(false);
  // const [currentReview, setCurrentReview] = useState(null);
  const theme = useContext(ThemeContext);

  // console.log(theme.feedbackModal.starColor);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await instance.get('/reviews/own');
        // const reviewData = response.data.data;
        // setCurrentReview(reviewData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReview();
  }, []);

  const handleRating = rate => {
    setRating(rate);
  };

  const handleReviewSubmit = e => {
    setReview(e.target.value);
  };

  const handleChange = e => {
    setRating(e.target.value);
    setReview(e.target.value);
  };

  const handleClickClose = () => {
    setRating(0);
    setReview('');
  };

  // const handleReset = () => {
  //   setRating(0);
  //   setReview('');
  //   // setButtonsVisible(false);
  //   // setFormSubmitted(false);
  // };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   console.log(`raiting: ${rating}, review: ${review}`);
  //   setFormSubmitted(true);

  //   try {
  //     await sendFeedbackToBackend(rating, review);
  //     // setFormSubmitted(true);
  //     // setButtonsVisible(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSaveClick = async e => {
    e.preventDefault();
    try {
      await sendFeedbackToBackend(rating, review);
      setSaveClicked(true); // Set the state to indicate Save was clicked
      // setButtonsVisible(true); // Show the Edit and Delete buttons
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteReview = reviewId => {
    deleteReview(reviewId);
  };

  return (
    <ModalContainer
    //  onSubmit={handleSubmit}
    >
      <RaitingContainer>
        <RaitingLabel htmlFor="starRaiting">Raiting</RaitingLabel>
        <Rating
          name="stars"
          value={rating}
          initsalValue={rating}
          onClick={handleRating}
          initialValue={rating}
          id="starRaiting"
          onChange={handleChange}
          fillColor={theme.feedbackModal.starColor}
          emptyColor={theme.feedbackModal.starColorDefault}
        />
      </RaitingContainer>
      <ReviewContainer>
        <StyledReviewButton>
          <LabelText>Review</LabelText>
          {saveClicked && (
            <>
              <EditButton>
                <PencilIcon stroke={'currentColor'} />
              </EditButton>
              <DeleteButton
                //  onClick={handleReset}
                onClick={() => handleDeleteReview(initialReview._id)}
              >
                <TrashIcon2 stroke={'currentColor'} />
              </DeleteButton>
            </>
          )}
        </StyledReviewButton>
        <ReviewInput
          placeholder="Enter text"
          value={review}
          // onChange={handleChange}
          onChange={handleReviewSubmit}
        />
      </ReviewContainer>
      {!saveClicked && (
        <ButtonContainer>
          <SaveEditButton
            type="submit"
            rating={rating}
            disabled={rating === 0 || cancelButtonFocused}
            // onClick={sendFeedbackToBackend}
            onClick={handleSaveClick}
          >
            Save
          </SaveEditButton>
          <CancelButton
            type="reset"
            onFocus={() => setCancelButtonFocused(true)}
            onBlur={() => setCancelButtonFocused(false)}
            onClick={() => {
              onCancel();
              handleClickClose();
            }}
          >
            Cancel
          </CancelButton>
        </ButtonContainer>
      )}
    </ModalContainer>
  );
};
