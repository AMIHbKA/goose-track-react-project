import { Form } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  padding: 40px 24px;
  width: 100%;
  max-width: 335px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  outline: 1px solid red;

  border-radius: 8px;
  background: #fff;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 24px;
  outline: 1px solid red;
`;

export const FormHeader = styled.h2`
  color: ${props => props.theme.colors.primary};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgb(0 0 0 / 0.07);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(24 / 18);
`;
