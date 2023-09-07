import styled from 'styled-components';
import { hoverBackgroundStyle } from 'UI';
import { PlusIcon } from 'UI/icons';

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: max-content;
  margin-top: 0px;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    transform: translate(0, -50%);
    margin-top: 35px;
  }
`;

export const Wrap = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.accentColor};
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #3e85f3;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 124px;
    height: 124px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  position: absolute;
  top: 85%;
  right: 20%;
  ${hoverBackgroundStyle}

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const AddIcon = styled(PlusIcon)`
  width: 100%;
  height: 100%;
  display: block;
  transition: all 250ms;
  stroke: #fff;
`;
