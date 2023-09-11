import styled from 'styled-components';
import { ArrowCircleBrokenRightIcon } from 'UI';

export const PopUpMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 14px;
  /* width: 147px;
  height: 90px; */
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.colors.secondBack};
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const PopUpButton = styled.button`
  display: flex;
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.mainText};
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const PopUpWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const inProgressArrow = styled(ArrowCircleBrokenRightIcon)`
  outline: 1px solid red;
`;
