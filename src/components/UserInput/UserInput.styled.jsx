import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const MessageError = styled(ErrorMessage)`
  display: block;
  color: red;
`;
export const Input = styled(Field)`
  height: 42px;
  border-radius: 8px;
  border-width: 1px;
  padding: 18px 14px;
  border-color: ${({ theme }) => theme.userAccount.border};
  background-color: transparent;
  color: ${({ theme }) => theme.userAccount.inputText};
  transition: all 250ms;
  font-family: 'InterSemiBolt';
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);

  &::placeholder {
    color: ${({ theme }) => theme.userAccount.inputText};
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet} {
    font-size: 16px;
    line-height: calc((18 / 16) * 100%);
  }
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 354px;
  font-family: 'InterNormal';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: calc((14 / 12) * 100%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 354px;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
  }
`;