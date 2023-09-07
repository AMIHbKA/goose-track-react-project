import styled from 'styled-components';

const ColumnsTasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  max-height: ${props => props.maxHeight - 112}px;

  ${({ maxHeight, tasksLength }) =>
    maxHeight - 112 > tasksLength * 130 - 14 + 80
      ? `
      margin-right: 18px;
      `
      : `
      margin-right: 6px; 
      padding-right: 6px;
      `}

  overflow-y: auto;
  overflow-x: hidden;

  padding-left: 18px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.scrollbarBackground};
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;

    border-radius: 12px;

    background-color: ${({ theme }) => theme.colors.scrollbarThumbBackground};
  }

  ${({ noTasks }) =>
    noTasks ||
    `
    margin-top: 24px;
    `}

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-height: ${props => props.maxHeight - 195}px;

    padding-left: 21px;

    ${({ maxHeight, tasksLength }) =>
      maxHeight - 112 > tasksLength * 130 - 14 + 80
        ? `
      margin-right: 23px;
      `
        : `
      margin-right: 9px; 
      padding-right: 8px;
      `}

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      width: 8px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    max-height: ${props => props.maxHeight - 199}px;
  }
`;

export default ColumnsTasksList;
