import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import {
  ButtonContainer,
  CancelButton,
  DeleteButton,
  EditButton,
  LabelText,
  ModalContainer,
  RaitingContainer,
  ReviewContainer,
  ReviewInput,
  SaveEditButton,
} from './FeedbackModal.styled';
import { PencilIcon, TrashIcon, TrashIcon2 } from 'UI';

export const FeedbackModal = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };

  return (
    <ModalContainer>
      <RaitingContainer>
        <p>Raiting</p>

        <Rating onClick={handleRating} initialValue={rating} />
      </RaitingContainer>
      <ReviewContainer>
        <div>
          <LabelText>Review</LabelText>
          <EditButton>
            <PencilIcon />
          </EditButton>
          <DeleteButton>
            <TrashIcon2 />
          </DeleteButton>
        </div>
        <ReviewInput placeholder="Enter text" />
      </ReviewContainer>
      <ButtonContainer>
        <SaveEditButton>Save</SaveEditButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonContainer>
    </ModalContainer>
  );
};
