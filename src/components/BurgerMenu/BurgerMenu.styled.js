import styled from 'styled-components';
import { CloseIcon } from 'UI';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 0.5);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: start;
  align-items: center;

  z-index: 1200;
`;

export const BurgerMenuStyled = styled.div`
  outline: 1px solid darkcyan;
  background-color: aqua;
  max-width: 225px;
  min-height: 100vh;

  padding: 24px 20px;
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 0.5s ease, transform 0.3s ease;

  &.menu-open {
    opacity: 1;
    transform: translateX(0);
  }

  &.menu-closed {
    opacity: 0;
    transform: translateX(-100px);
  }
`;

export const CloseButton = styled(CloseIcon)`
  content: '';
  background-size: contain;
  background-repeat: no-repeat;
  stroke: ${props => props.theme.colors.mainText};
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 18px;
    right: 18px;
  }

  &:hover {
    stroke: ${props => props.theme.colors.primary};
  }
`;
