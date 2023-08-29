import styled from 'styled-components';

export const ModalContainer = styled.div`
  min-width: 335px;
  min-height: 290px;
  color: rgb(52 52 52 / 0.8);
  background-color: #fff;
  border-radius: 8px;
  padding: 28px 20px;
`;

export const RaitingContainer = styled.div`
  margin-bottom: 20px;
`;

export const ReviewContainer = styled.div`
  margin-bottom: 20px;
`;

export const LabelText = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const EditButton = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #e3f3ff;
`;

// export const StyledPencilIcon

export const DeleteButton = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  background-color: rgb(234 61 101 / 0.2);
`;

export const ReviewInput = styled.input`
  min-width: 295px;
  min-height: 130px;
  border: none;
  background-color: #f6f6f6;
  border-radius: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  border: none;
`;

export const SaveEditButton = styled.button`
  min-width: 144px;
  background-color: #3e85f3;
  border: none;
  padding: 12px;
  border-radius: 8px;
`;

export const CancelButton = styled.button`
  min-width: 144px;
  background-color: #e5edfa;
  border: none;
  padding: 12px;
  border-radius: 8px;
`;
