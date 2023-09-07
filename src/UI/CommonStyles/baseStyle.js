import { css } from 'styled-components';

// is used when validating registration and login forms
export const CommonInfoStringStyles = css`
  display: block;
  margin-left: 12px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
`;

// is used with registration and login forms buttons
export const authButtonIcon = css`
  width: 18px;
  height: 18px;
  margin-left: 11px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

export const calendarNavLinkStyle = css`
  padding: 8px 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.monthDayButtonBorder};
  background-color: ${({ theme }) => theme.calendarToolBar.buttonBackground};
  color: ${({ theme }) => theme.calendarToolBar.buttonDefaultText};
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.calendarToolBar.buttonActiveText};
    background-color: ${({ theme }) =>
      theme.calendarToolBar.activeButtonBackground};
  }
`;

export const backgroundButtonTransition = css`
  transition: background-color 300ms ease-in-out;
`;

export const hoverBackgroundStyle = css`
  ${backgroundButtonTransition}
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hoverState};
  }
`;

export const hoverLinkStyle = css`
  ${backgroundButtonTransition}
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverState};
  }
`;

export const buttonBoxShadow = css`
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 0.2);
`;

export const iconTransitionStyle = css`
  transition: fill 300ms ease-in-out;
`;

export const shakeAnimationBody = css`
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

export const shakeAnimationHover = css`
  &:hover {
    animation: shake 0.5s;
  }
`;

export const shakeAnimation = css`
  ${shakeAnimationBody}
  ${shakeAnimationHover}
`;
