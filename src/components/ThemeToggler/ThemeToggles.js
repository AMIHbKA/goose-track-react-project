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
`;
