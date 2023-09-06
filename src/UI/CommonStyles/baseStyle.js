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

export const hoverBackgroundStyle = css`
  transition: background-color 300ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hoverState};
  }
`;

export const hoverLinkStyle = css`
  transition: background-color 300ms ease-in-out;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverState};
  }
`;
