import styled from 'styled-components';

export const MenuHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 50px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-bottom: 32px;
  }

  & > svg {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 34px;
      height: 34px;
    }
  }
`;
