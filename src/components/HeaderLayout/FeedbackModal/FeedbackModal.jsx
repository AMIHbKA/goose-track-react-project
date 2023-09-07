import React, { useState, useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  ButtonContainer,
  CancelButton,
  DeleteButton,
  EditButton,
  LabelText,
  ModalContainer,
  RaitingContainer,
  RaitingLabel,
  ReviewInput,
  SaveEditButton,
  StyledReviewButton,
} from './FeedbackModal.styled';
import { PencilIcon, TrashIcon2 } from 'UI';
import { useTranslation } from 'react-i18next';

import {
  deleteReview,
  editReview,
  getReviewFromBackend,
  sendFeedbackToBackend,
} from 'redux/review/operations';

import { useEffect } from 'react';

export const FeedbackModal = ({ onCancel, initialReview }) => {
  const { t } = useTranslation();

  const [rating, setRating] = useState(initialReview?.rating || 0);
  const [review, setReview] = useState(initialReview?.review || '');
  const [saveClicked, setSaveClicked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [cancelButtonFocused, setCancelButtonFocused] = useState(false);
  const theme = useContext(ThemeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(getReviewFromBackend());
        console.log(result.payload);
        if (!result.payload) return;
        setRating(result.payload.stars);
        setReview(result.payload.reviewText);
        setSaveClicked(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

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

  const handleSaveClick = async e => {
    e.preventDefault();
    try {
      await dispatch(
        sendFeedbackToBackend({
          stars: rating,
          reviewText: review,
        })
      );
      setSaveClicked(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputUnlock = e => {
    e.preventDefault();
    setEditMode(true);
    setSaveClicked(false);
  };

  const handleEditClick = async e => {
    e.preventDefault();
    try {
      await dispatch(
        editReview({
          stars: rating,
          reviewText: review,
        })
      );
      setSaveClicked(true);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async e => {
    e.preventDefault();
    try {
      await dispatch(deleteReview());
      setRating(0);
      setReview('');
      setSaveClicked(false);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalContainer>
      <RaitingContainer saveClicked={saveClicked}>
        <RaitingLabel htmlFor="starRaiting">
          {t('feedbackModal.raiting')}
        </RaitingLabel>
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
      <div>
        <StyledReviewButton>
          <LabelText>{t('feedbackModal.review')}</LabelText>
          {(saveClicked || editMode) && (
            <>
              <EditButton onClick={handleInputUnlock} editMode={editMode}>
                <PencilIcon stroke={'currentColor'} />
              </EditButton>
              <DeleteButton onClick={handleDelete}>
                <TrashIcon2 stroke={'currentColor'} />
              </DeleteButton>
            </>
          )}
        </StyledReviewButton>
        <ReviewInput
          placeholder="Enter text"
          value={review}
          onChange={handleReviewSubmit}
          saveClicked={saveClicked}
        />
      </div>
      {!saveClicked && (
        <ButtonContainer>
          {!editMode ? (
            <SaveEditButton
              type="submit"
              rating={rating}
              disabled={!rating || !review || cancelButtonFocused}
              onClick={handleSaveClick}
            >
              {t('feedbackModal.buttonSave')}
            </SaveEditButton>
          ) : (
            <SaveEditButton
              type="submit"
              rating={rating}
              disabled={!rating || !review || cancelButtonFocused}
              onClick={handleEditClick}
            >
              {t('feedbackModal.buttonEdit')}
            </SaveEditButton>
          )}
          <CancelButton
            type="reset"
            onFocus={() => setCancelButtonFocused(true)}
            onBlur={() => setCancelButtonFocused(false)}
            onClick={() => {
              onCancel();
            }}
          >
            {t('feedbackModal.buttonCancel')}
          </CancelButton>
        </ButtonContainer>
      )}
    </ModalContainer>
  );
};
