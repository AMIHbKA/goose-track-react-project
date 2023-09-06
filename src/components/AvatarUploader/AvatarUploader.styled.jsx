import styled from 'styled-components';
import { PlusIcon } from 'UI/icons';

export const MainWrapper = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: max-content;
`;

export const Wrap = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.accentColor};
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
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
  background-color: #e0e0e0;
  cursor: pointer;
  position: absolute;
  top: 85%;
  right: 20%;

  @media (min-width: (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const AddIcon = styled(PlusIcon)`
  width: 100%;
  height: 100%;
  display: block;
  transition: all 250ms;
  fill: #3e85f3;
  &:hover,
  &:focus {
    fill: #3e85f3;
  }
`;
