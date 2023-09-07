import styled from 'styled-components';

export const ToggleButton = styled.button`
  width: 32px;
  height: 33px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  text-align: center;
  color: #3e85f3;
  background-color: #fff;
  transition: background-color linear 0.3s;

  &:hover {
    background-color: #dcebf7;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 44px;
    height: 44px;
  }
`;
