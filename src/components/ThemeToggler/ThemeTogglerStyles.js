import { iconTransitionStyle } from 'UI/CommonStyles/baseStyle';

const { default: styled } = require('styled-components');

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 32px;
      height: 32px;
    }
  }

  .moon {
    fill: ${({ theme }) => theme.colors.primary};
    ${iconTransitionStyle};

    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.colors.hoverState};
    }
  }

  .sun {
    fill: ${({ theme }) => theme.colors.primary};
    ${iconTransitionStyle};

    &:hover,
    &:focus {
      fill: orange;
    }
    ${iconTransitionStyle};
  }
`;
