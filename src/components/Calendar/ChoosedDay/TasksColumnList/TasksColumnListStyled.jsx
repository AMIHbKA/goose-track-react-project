import styled from 'styled-components';

export const TasksColumnListContainer = styled.div`
  position: relative;

  flex-grow: 1;

  display: flex;

  width: calc(100vw - 40px);

  overflow-x: auto;
  overflow-y: hidden;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(100vw - 64px);
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    width: calc(100vw - 64px - 289px);
  }
`;

export const TasksColumnListWrapper = styled.div`
  position: absolute;

  display: inline-flex;
  align-items: flex-start;

  gap: 16px;

  max-height: ${props => props.maxHeight}px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    gap: 27px;
  }
`;
