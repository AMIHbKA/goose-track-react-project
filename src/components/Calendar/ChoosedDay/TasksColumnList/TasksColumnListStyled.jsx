import styled from 'styled-components';

export const TasksColumnListContainer = styled.div`
  position: relative;

  flex-grow: 1;

  display: flex;

  width: calc(100vw - 40px);

  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.scrollbarBackground};
  }

  ::-webkit-scrollbar-thumb {
    width: 12px;

    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.scrollbarThumbBackground};
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(100vw - 64px);

    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-thumb {
      width: 14px;
    }
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

    max-height: ${props => props.maxHeight - 12}px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    gap: 27px;
  }
`;
