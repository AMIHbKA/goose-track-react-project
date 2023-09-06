import styled from 'styled-components';

const ColumnsTasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  max-height: ${props => props.maxHeight - 159 + 47}px;

  overflow-y: auto;

  ${({ noTasks }) =>
    noTasks ||
    `
    margin-top: 24px;
    `}

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-height: ${props => props.maxHeight - 195}px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    max-height: ${props => props.maxHeight - 199}px;
  }
`;

export default ColumnsTasksList;
