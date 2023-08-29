import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  padding: 40px 24px;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 8px;
  background: #fff;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 40px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  min-width: 150px;
  max-width: 335px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 480px;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 18px;
  }
`;

export const FormHeader = styled.h2`
  margin-right: auto;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgb(0 0 0 / 0.07);
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: calc(24 / 18);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 24px;
  }
`;
