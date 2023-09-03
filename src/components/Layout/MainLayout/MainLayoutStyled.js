import styled from 'styled-components';

export const GridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'Menu-Panel User-Panel'
    'Menu-Panel Main-Panel';
`;

export const GridMenuPanel = styled.div`
  grid-area: Menu-Panel;
`;
export const GridUserPanel = styled.div`
  grid-area: User-Panel;
`;
export const GridMainPanel = styled.main`
  grid-area: Main-Panel;
  padding: 0 20px 40px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 32px 42px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    padding: 0 32px 32px;
  }
`;
