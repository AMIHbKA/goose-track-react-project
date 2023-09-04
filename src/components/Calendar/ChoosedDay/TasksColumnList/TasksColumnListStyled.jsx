import styled from 'styled-components';

export const TasksColumnListContainer = styled.div`
  flex-grow: 1;

  width: calc(100vw - 40px);

  overflow-x: auto;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(100vw - 64px);
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    width: calc(100vw - 64px - 289px);
  }
`;

export const TasksColumnListWrapper = styled.div`
  display: inline-flex;
  gap: 16px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    gap: 27px;
  }
`;
