import styled from 'styled-components';
import { hoverBackgroundStyle } from 'UI';

export const MenuPanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.secondBack};
  width: 225px;
  height: 100vh;
  padding: 24px 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 289px;
    padding: 24px 32px;
  }
`;

export const LogOutButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 14px 28px;
  border-radius: 16px;
  border-width: 0;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  line-height: 1.286;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  ${hoverBackgroundStyle}

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 16px 23px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
