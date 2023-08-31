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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
