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
  height: 100%;
  grid-area: Main-Panel;
`;

// export const Main = styled.main`
//   /* border-radius: 16px; */
//   /* overflow: hidden; */
// `;
