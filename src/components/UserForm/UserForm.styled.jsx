import styled from 'styled-components';
import { Form } from 'formik';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  column-gap: 50px;
  align-items: center;
  max-width: 100%;
  margin-top: 40px;

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-bottom: 44px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptopL}) {
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 100%;
`;

export const UploadImage = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  border: 1px solid red;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 195px;
  height: 46px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  background-color: ${props => props.theme.colors.primary};
  color: ${({ theme }) => theme.userAccount.buttonTextColor};
  transition: all 250ms;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverState};
  }
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-top: 88px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  transition: all 250ms;
  color: ${({ theme }) => theme.userAccount.inputText};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: calc((18 / 18) * 100%);
      margin-top: 20px;
  }
`;

export const RoleTitle = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  margin-top: 4px;
  color: ${({ theme }) => theme.userAccount.roleColor};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin-top: 8px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-bottom: 44px;
  }
`;

export const AccountForm = styled(Form)`
  padding: 40px 18px;
  padding-top: 0px;
  transition: all 250ms;
  background-color: ${({ theme }) => theme.userAccount.mainBackground};
  border-radius: 16px;
  height: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 60px 18px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 100%;
    font-family: 'InterNormal';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: calc((14 / 12) * 100%);
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 354px;
    font-size: 14px;
   line-height: calc((18 / 14) * 100%);
  }
`;

